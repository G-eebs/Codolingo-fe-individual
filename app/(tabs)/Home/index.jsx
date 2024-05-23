import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
const MainImage = require("../../../assets/geoffrey.jpg");

export default function Home() {
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
    <>
      <View style={styles.header}>
        <Text style={[styles.text, styles.title]}>
          Click on a lesson to begin...
        </Text>
        <Image style={styles.image} source={MainImage} />
      </View>

      <View style={styles.circles}>
        {lessons.map((lesson) => {
          return (
            <Link
              key={lesson._id}
              style={styles.circle}
              href={`/Home/${lesson._id}`}
            >
              {lesson._id}
            </Link>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "monospace",
    fontSize: 20,
  },
  circle: {
    backgroundColor: "grey",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 15,
    fontFamily: "monospace",
    fontSize: 20,
    textAlign: "center",
    padding: 13,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    height: 120,
    width: 120,
    borderColor: "grey",
    borderWidth: 4,
    borderRadius: 10,
  },

  circles: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
