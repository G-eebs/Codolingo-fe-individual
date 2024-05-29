import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';

export default function DragAndDrop({ question }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [dropZoneValues, setDropZoneValues] = useState(null);

  const handleDrop = (e) => {
    if (dropZoneValues && draggedItem) {
      // Check if the dragged item is dropped within the drop zone
      const { moveX, moveY } = e.nativeEvent;
      if (moveX >= dropZoneValues.x &&
          moveX <= dropZoneValues.x + dropZoneValues.width &&
          moveY >= dropZoneValues.y &&
          moveY <= dropZoneValues.y + dropZoneValues.height) {
        console.log('Dropped in the zone!');
        // Handle the successful drop logic here
      }
    }
  };

  const setDropZone = (event) => {
    setDropZoneValues(event.nativeEvent.layout);
  };

  return (
    <View style={styles.questionSection}>
      <Text style={styles.teaching}>{question.teaching}</Text>
      <Text style={styles.question}>{question.question}</Text>

      <View style={styles.dropZone} onLayout={setDropZone}>
        <Text style={styles.dropZoneText}>Drop here</Text>
      </View>

      <View style={styles.draggableContainer}>
        {question.options.map((option, index) => (
          <Draggable
            key={index}
            x={50}
            y={100}
            onDragRelease={(e) => {
              setDraggedItem(option);
              handleDrop(e);
            }}
          >
            <View style={styles.option}>
              <Text style={styles.optionText}>{option}</Text>
            </View>
          </Draggable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionSection: {
    padding: 10,
    alignItems: "center",
  },
  teaching: {
    backgroundColor: "aliceblue",
    fontFamily: "monospace",
    fontSize: 20,
  },
  question: {
    fontFamily: "monospace",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  dropZone: {
    height: 100,
    width: "90%",
    borderColor: "blue",
    borderStyle: "dashed",
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  dropZoneText: {
    fontFamily: "monospace",
    fontSize: 18,
    color: "blue",
  },
  draggableContainer: {
    width: "100%",
    alignItems: "center",
  },
  option: {
    width: 100,
    height: 50,
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "white",
  },
  optionText: {
    fontFamily: "monospace",
    fontSize: 20,
    textAlign: "center",
  },
});
