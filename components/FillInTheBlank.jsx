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
    backgroundColor: "#ECE7E9",
    fontFamily: "monospace",
    fontSize: 20,
    padding: 6,
    lineHeight: 28,
  },
  question: {
    fontFamily: "monospace",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "600",
    padding: 6,
    
  },
  form: {
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    paddingHorizontal:80,
    justifyContent: "space-around",
    backgroundColor: "#9d8189",
    borderRadius: 4,
    margin: 5,
    color: "#252422",
    fontSize: 12,
    fontFamily: "monospace",
  },
});