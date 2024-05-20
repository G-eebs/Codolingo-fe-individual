import { Text, View, TextInput, Image, Pressable, Button, StyleSheet } from 'react-native';
import {Link} from 'expo-router'

const MainImage = require("../assets/geoffrey.jpg");

export default function Start() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={[styles.text, styles.header]}>Welcome to Codolingo...</Text>
        <View>
          <Image style={styles.image} source={MainImage} />
        </View>
      </View>

      <Text style={[styles.text, styles.description]}>
        Getting basic & fundamental knowledge on the go
      </Text>

      <View >
        <View style={styles.form}>
          <TextInput placeholder="username" style={styles.text}></TextInput>
        </View>
        <View style={styles.form} >
          <TextInput placeholder="password" style={styles.text}></TextInput>
        </View>
      </View>

      <View style={styles.padding}>
        <View style={styles.buttons}>
          <Pressable>
          <Link href="/home" style={styles.text}>Sign in</Link>
          </Pressable>
        </View>

        <View style={styles.buttons}>
          <Pressable>
          <Link href="/create-account" style={styles.text}>Create an account</Link>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

//Note: You cannot(?) change anything other than the colour of a button in RN (in IOS it will change text/ ANDRD changes backgrnd). Solution = use pressable OR touchable

const styles = StyleSheet.create({
  text: {
    fontFamily: "monospace",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 15,
  },

  header: {
    fontSize: 25,
  },

  image: {
    height: 150,
    width: 150,
    borderColor: "grey",
    borderWidth: 2.5,
    borderRadius: 5,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  description: {
    flexDirection: "row",
    width: 150,
    height: 150,
    fontSize: 22,
  },

  form: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "#d3d3d3",
    margin: 5,
    color: "black",
  },

  buttons: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2.5,
    borderColor: "black",
    margin: 5,
    color: "black",
  },

  padding: {
    padding: 15,
  }
});
