import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import MultipleChoice from "../../../components/MultipleChoice";

export default function Lesson(lesson) {
  const [questions, setQuestions] = useState([
    {
      _id: 1,
      type: "multiple choice",
      teaching:
        "A variable is like a box that holds data that you can use and manipulate in your program. Think of it as a labelled bag where you can store different types of information.",
      question: "What is a variable?",
      options: [
        "a container to store data",
        "an ordered list",
        "an unordered list",
        "a set of items",
      ],
      answer: 0,
      help_url: "https://www.w3schools.com/python/python_variables.asp",
    },
    {
      _id: 2,
      type: "multiple choice",
      teaching:
        "In Python, assigning a value to a variable is straightforward. You use the equals sign (=) to do this.",
      question: "How would you assign a value to a variable?",
      options: ["let a = 7", "var a = 7", "a = 7", "const a = 7"],
      answer: 2,
      help_url: "https://www.w3schools.com/python/python_variables.asp",
    },
    {
      _id: 3,
      type: "multiple choice",
      teaching:
        "Tuple assignment allows for the assignment of multiple values to multiple variables. Example: a, b = 1, 2 assigns 1 to a and 2 to b.",
      question:
        "Multiples values can be assigned to multiple variables at once.",
      options: ["true", "false"],
      answer: 0,
      help_url: "https://www.w3schools.com/python/python_variables.asp",
    },
    {
      _id: 4,
      type: "drag and drop",
      teaching: `In Python, comparison operators allow you to compare values and determine relationships between them. Let's break down each operator:\n== This operator checks if two values are equal. For example, 5 == 5 returns True.\n! The exclamation mark (!) stands for "not" in Python. It's used in combination with = to form the != operator, which checks if two values are not equal. For instance, 5 != 3 returns True.\n> This operator checks if the value on the left is greater than the value on the right. For example, 7 > 5 returns True.\n< This operator checks if the value on the left is less than the value on the right. For instance, 3 < 5 returns True.`,
      question: "Drag the following to the correct definition:",
      options: ["<=", "!=", "<", "==", ">=", ">"],
      answer_options: [
        "is equal to",
        "not equal to",
        "greater than",
        "less than",
        "greater than or equal to",
        "less than or equal to",
      ],
      answer: ["==", "!=", ">", "<", ">=", "<="],
      help_url: "https://www.w3schools.com/python/python_operators.asp",
    },
  ]);

  return (
    <View>
      <Text>{useLocalSearchParams().lesson}</Text>
      {questions[0].type === "multiple choice" && (
        <MultipleChoice question={questions[0]} />
      )}
    </View>
  );
}
