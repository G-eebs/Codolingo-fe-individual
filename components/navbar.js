import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <Link style={styles.navbar} href="/home">
        🏠
      </Link>
      <Link style={styles.navbar} href="/leaderboard">
        🏆
      </Link>
      <Link style={styles.navbar} href="/notifications">
        🔔
      </Link>
      <Link style={styles.navbar} href="/settings">
        ⚙️
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    fontSize: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

//We may wish to wrap each link component in a "Pressable"(/button) - for accessibility?
