import { React, useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ScoreCard from "../../components/ScoreCard";
import { getAllUsers } from "../../utils/utils";

export default function Leaderboard() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers()
			.then((fetchedUsers) => {
				const sortedUsers = fetchedUsers.data.users.sort((a, b) => a.score - b.score).reverse();
				setUsers(sortedUsers);
				setLoading(false);
			})
			.catch((error) => {
        console.log(error);
        setLoading(false);
			});
	}, []);

	if (loading) return <Text>Loading...</Text>;

	return (
		<ScrollView style={styles.page}>
			{users.map((user) => {
				return (
					<View key={user.user_name}>
						<ScoreCard username={user.user_name} avatar={user.avatar_url} score={user.score} />
					</View>
				);
			})}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "monospace",
		fontSize: 20,
	},
	page: {
		backgroundColor: "#DBD2E0",
	},
});
