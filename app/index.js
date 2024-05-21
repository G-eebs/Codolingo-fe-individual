import { StyleSheet, Text, View } from "react-native";
import Start from "./startpage";

export default function Page() {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Start />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    fontFamily: "monospace",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    fontFamily: "monospace",
  },
});
