import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import home from '../app/(tabs)/Home';
import leaderboard from '../app/(tabs)/Leaderboard';

const Stack = createStackNavigator();

const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export default function NavBar() {
  return (
 
    <NavigationContainer>
 
      <Stack.Navigator>
 
        <Stack.Screen name="Home" component={home} />
 
        <Stack.Screen name="Details" component={leaderboard} />
 
      </Stack.Navigator>
 
    </NavigationContainer>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "windowH",
    width: "windowW",
    position: "absolute",
    bottom: 0,
    
    
  },
  scrollView: {
    backgroundColor: 'lightgrey',
    marginHorizontal: 20,
   
  },
  navbarElements: {
    fontSize: 42,
  },
});
//We may wish to wrap each link component in a "Pressable"(/button) - for accessibility?


// <View style={styles.container}>
// <ScrollView horizontal="true" style={styles.scrollView}>

//   <Link style={styles.navbarElements} href="/home">
//     🏠
//   </Link>
//   <Link style={styles.navbarElements} href="/leaderboard">
//     🏆
//   </Link>
//   <Link style={styles.navbarElements} href="/notifications">
//     🔔
//   </Link>
//   <Link style={styles.navbarElements} href="/settings">
//     ⚙️
//   </Link>

// </ScrollView>
// </View>