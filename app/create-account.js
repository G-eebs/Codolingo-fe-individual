import { Text, View, TextInput, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'

const mainImage = require("../assets/geoffrey.jpg");
const avatar1 = require("../assets/avatar1.jpg")
const avatar2 = require("../assets/avatar2.jpg")
const upload = require("../assets/upload.jpeg")

export default function CreateAccount() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={[styles.text, styles.title]}>Welcome to Codolingo...</Text>
        <Image style={styles.headerImage} source={mainImage} />
      </View>
      <Text style={styles.text}>
        Create an account:
      </Text>

      <View >
       
          <TextInput placeholder="username" style={styles.form}/>
       
          <TextInput placeholder="password" style={styles.form}/>
 
        <View style={styles.inputText} >
          <Text style={styles.text}>Choose an avatar:</Text>
        </View>
      </View>

      <View style={styles.avatarContainer}>
        <TouchableOpacity>
          <Image style={styles.image} source={avatar1} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.image} source={avatar2} />
        </TouchableOpacity>

        <Image style={styles.image} source={upload} />

      </View >
      <Pressable style={styles.buttons}>
        <Link href="/home" style={styles.text}>Create profile & sign in</Link>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "monospace",
    fontSize: 20
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 15,
  },

  title: {
    fontSize: 25,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerImage: {
    height: 120,
    width: 120,
    borderColor: "grey",
    borderWidth: 4,
    borderRadius: 10,
  },

  form: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "#d3d3d3",
    margin: 5,
    color: "black",
    fontSize: 16,
    fontFamily: "monospace"
  },

  image: {
    height: 100,
    width: 100,
    borderColor: "grey",
    borderWidth: 4,
    borderRadius: 10,
  },

  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },

  buttons: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2.5,
    borderColor: "black",
    margin: 5,
    color: "black",
  },
})