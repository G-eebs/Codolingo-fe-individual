import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { getAllLessons } from "../../../utils/utils";
const MainImage = require("../../../assets/geoffrey.jpg");

export default function Home() {
  const [allLessons, setAllLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={[styles.text, styles.title]}>
          Click on a lesson to begin...
        </Text>
        <Image style={styles.image} source={MainImage} />
      </View>

      <View style={styles.circles}>
        {allLessons.map((lesson) => {
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
