import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { getAllLessons } from "../../../utils/utils";
import { UserContext } from "../../../contexts/User";
import CircularProgress from "react-native-circular-progress-indicator";
const MainImage = require("../../../assets/geoffrey.jpg");

export default function Home() {
	const [allLessons, setAllLessons] = useState([]);

	const [loading, setLoading] = useState(true);

	const { user } = useContext(UserContext);

	useEffect(() => {
		setLoading(true);
		getAllLessons()
			.then((response) => {
				setAllLessons(response.data.lessons);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Text style={[styles.text, styles.loading]}>Loading...</Text>;
	}

  function calculateLessonProgress(lessonQuestions, userProgress) {
    const completedQuestions = lessonQuestions.filter(question => userProgress.includes(question))
    return completedQuestions.length / lessonQuestions.length * 100
  }

	return (
		<View style={styles.page}>
			<View style={styles.header}>
				<Text style={[styles.text, styles.title]}>{"Click on a lesson\nto begin..."}</Text>
				<Image style={styles.image} source={MainImage} />
			</View>

			<View style={styles.lessons}>
				{allLessons.map((lesson) => {
					return (
						<Link key={lesson._id} style={styles.lesson} href={`/Home/${lesson._id}`}>
							<CircularProgress
								value={calculateLessonProgress(lesson.questions, user.progress)}
								title={lesson._id}
                radius={30}
                titleFontSize={18}
                circleBackgroundColor={'#333'}
								showProgressValue={false}
								style={styles.progressCircle}
							></CircularProgress>
						</Link>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  page : {
    height: "100%",
    backgroundColor: "#bbb",
  },

	text: {
		fontFamily: "monospace",
		fontSize: 20,
	},

	header: {
		padding: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
    backgroundColor: "#aaa",
	},

	title: {},

	image: {
		height: 120,
		width: 120,
		borderColor: "grey",
		borderWidth: 4,
		borderRadius: 10,
	},

	lessons: {
		flexDirection: "column",
		alignItems: "center",
	},

	progressCircle: {
		width: 57,
		height: 57,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "yellow",
		textAlign: "center",
	},

	lesson: {
    marginTop: 15,
    height: 60,
	},

	loading: {
		marginTop: 15,
		textAlign: "center",
	},
});
