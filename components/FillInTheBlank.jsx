import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";




export default function FillInTheBlank({ question,
  userAnswer,
  setUserAnswer }) {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.questionSection}>
      <Text style={styles.teaching}>{question.teaching}</Text>

      <Text style={styles.question}>{question.question}</Text>

      <TextInput style={styles.form} onChangeText={onChangeText} value={text} placeholder='Type your answer here...' onEndEditing={() => {setUserAnswer(text.toLowerCase())}} />
    </View>
  )
}

const styles = StyleSheet.create({
  questionSection: {
    padding: 10,
    alignItems: "center",
  },
  teaching: {
    backgroundColor: "aliceblue",
    fontFamily: "monospace",
    fontSize: 20,
  },
  question: {
    fontFamily: "monospace",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  option: {
    width: "90%",
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  optionText: {
    fontFamily: "monospace",
    fontSize: 20,
    textAlign: "center",
  },
  selectedOption: {
    backgroundColor: "lightgrey",
  },
  form: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "#d3d3d3",
    margin: 5,
    color: "#252422",
    fontSize: 16,
    fontFamily: "monospace",
  },
});