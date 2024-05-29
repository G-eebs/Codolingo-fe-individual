import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Modal from 'react-native-modal'; // Assuming you are using react-native-modal
import { useNavigation } from '@react-navigation/native';

export default function WelcomePopUp({ isVisible }) {
  const [isModalVisible, setModalVisible] = useState(isVisible);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigateToHome = () => {
    toggleModal();
    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={0.3}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.text}>Welcome to Codolingo!</Text>
            <Text style={styles.text}>
              To use this app simply make your way through the questions. Once
              you have completed one section, the next section will unlock.
            </Text>
            <Text style={styles.text}>
              Play against friends and monitor your progress in our leaderboard
            </Text>
            <Text style={styles.text}>Happy Coding!!!</Text>
            <Button
              color={styles.button.color}
              title="Press here to start your coding journey"
              onPress={navigateToHome}
            />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DBD2E0",
  },
  modal: {
    justifyContent: "center",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
  },
  text: {
    fontFamily: "monospace",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "#00C400",
  },
});