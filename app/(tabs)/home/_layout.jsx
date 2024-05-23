import { Stack } from "expo-router/stack";
import { useState } from "react";

export default function home() {
	const [lessons, setLessons] = useState([
		{
			_id: 1,
			questions: [1, 2, 3, 4],
		},
		{
			_id: 2,
			questions: [5, 6, 7, 8],
		},
	]);

	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Home",
					href: null,
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="lesson"
				options={{
					title: "Lesson",
					href: null,
				}}
			/>
		</Stack>
	);
}
