import { View, Text, StyleSheet, Pressable } from "react-native";

export default function MultipleChoice({ question, setUserAnswer }) {
  return (
    <View style={styles.questionSection}>
      <Text style={styles.teaching}>{question.teaching}</Text>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => {
        return (
          <Pressable onPress={() => {setUserAnswer(index)}} key={option} style={styles.option}>
            <Text style={styles.options}>- {option}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  questionSection: {
    padding: 10,
  },
  teaching: {
    backgroundColor: "green",
    fontFamily: "monospace",
    fontSize: 20,
  },
  question: {
    fontFamily: "monospace",
    fontSize: 20,
  },
  options: {
    fontFamily: "monospace",
    fontSize: 20,
  },
  option: {
    border: "solid green",
  },
});
