import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useContext, useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import MultipleChoice from "../../../components/MultipleChoice";
import DragAndDrop from "../../../components/DragAndDrop";
import { getQuestionsByLessonId, patchUserProgress } from "../../../utils/utils";
import { UserContext } from "../../../contexts/User";

export default function Lesson() {
	const [questions, setQuestions] = useState([]);

	const [loading, setLoading] = useState(true);

	const [userAnswer, setUserAnswer] = useState(null);

	const [incorrect, setIncorrect] = useState(false);

	const lessonId = useLocalSearchParams().lesson;

	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		setLoading(true);
		getQuestionsByLessonId(lessonId)
			.then((response) => {
				const requestedQuestions = response.data.questions;
				const filteredQuestions = requestedQuestions.filter((question) => !user.progress.includes(question._id));
				setQuestions(filteredQuestions);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);

	function handleSubmit() {
		if (userAnswer === questions[0].answer) {
			patchUserProgress(user.user_name, { progress: questions[0]._id }).then((response) => {
				setUser(response.data.user);
				setQuestions((current) => {
					const newQuestions = [...current];
					newQuestions.shift();
					return newQuestions;
				});
			});
		} else {
			setIncorrect(true);
			setQuestions((current) => {
				const newQuestions = [...current];
				newQuestions.push(newQuestions[0]);
				newQuestions.shift();
				return newQuestions;
			});
		}
		setUserAnswer(null);
	}

	if (loading) {
		return <Text style={[styles.text, styles.loading]}>Loading...</Text>;
	} else if (incorrect) {
		return (
			<View style={styles.lesson}>
				<Text style={[styles.text, styles.incorrect]}>{`That's not right`}</Text>
				<TouchableOpacity
					onPress={() => {
						setIncorrect(false);
					}}
				>
					<Text style={styles.button}>Got it</Text>
				</TouchableOpacity>
			</View>
		);
	}

	if (questions.length === 0) {
		return (
			<View style={styles.lesson}>
				<Text style={[styles.text, styles.incorrect]}>Lesson complete, Well done!</Text>
				<Link href="/Home" style={styles.button}>Return to lessons</Link>
			</View>
		);
	}
	
	return (
		<ScrollView contentContainerStyle={styles.lesson}>
			{questions[0].type === "multiple choice" && (
				<MultipleChoice question={questions[0]} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
			)}
			{questions[0].type === "drag and drop" && (
				<DragAndDrop question={questions[0]} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
			)}
			<TouchableOpacity onPress={handleSubmit}>
				<Text style={styles.button}>Submit</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "monospace",
		fontSize: 20,
	},

	loading: {
		paddingTop: 15,
		textAlign: "center",
		height: "100%",
		backgroundColor: "#bbb",
	},

	lesson: {
		alignItems: "center",
		height: "100vh",
		paddingBottom: 15,
		backgroundColor: "#bbb",
	},

	button: {
		width: "fit-content",
		padding: 5,
		fontFamily: "monospace",
		fontSize: 20,
		fontWeight: "600",
		borderColor: "blue",
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: "#fff",
	},

	incorrect: {
		marginVertical: 15,
		textAlign: "center",
	},
});
