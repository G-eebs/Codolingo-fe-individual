import { StyleSheet, Text, View } from "react-native";
import {Link} from 'expo-router'

export default function NavBar(){
    return(
        <View>
             <Link href="/home">🏠</Link>
             <Link href="/leaderboard">🏆</Link>
             <Link href="/notifications">🔔</Link>
             <Link href="/settings">⚙️</Link>
        </View>
    )
}

//We may wish to wrap each link component in a "Pressable"(/button) - for accessibility?