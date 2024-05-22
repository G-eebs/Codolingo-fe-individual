import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Link } from "expo-router";
const MainImage = require("../../assets/geoffrey.jpg");

export default function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.text, styles.title]}>
          Click on a lesson to begin...
        </Text>
        <Image style={styles.image} source={MainImage} />
      </View>

      <View style={styles.circles}>
        <View style={styles.circle}>
          <Link href="/Home" style={styles.circleText}>
            1
          </Link>
        </View>
        <View style={styles.circle}>
          <Link href="/Home" style={styles.circleText}>
            2
          </Link>
        </View>
        <View style={styles.circle}>
          <Link style={styles.circleText} href="/Home">
            3
          </Link>
        </View>
        <View style={styles.circle}>
          <Link style={styles.circleText} href="/Home">
            4
          </Link>
        </View>
        <View style={styles.circle}>
          <Link style={styles.circleText} href="/Home">
            5
          </Link>
        </View>
        <View style={styles.circle}>
          <Link style={styles.circleText} href="/Home">
            6
          </Link>
        </View>
      </View>
    </View>
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
    margin: 5,
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

  circleText: {
    fontFamily: "monospace",
    fontSize: 20,
    textAlign: "center",
    marginTop: 13,
  },
});
