import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DragAndDrop from 'volkeno-react-native-drag-drop';

const PythonSymbolsDragAndDrop = ({ question }) => {
  const descriptions = [
    { id: '<=', text: 'Less than or equal to', layout: {} },
    { id: '!=', text: 'Not equal to', layout: {} },
    { id: '<', text: 'Less than', layout: {} },
    { id: '==', text: 'Equal to', layout: {} },
    { id: '>=', text: 'Greater than or equal to', layout: {} },
    { id: '>', text: 'Greater than', layout: {} },
  ];

  const correctMatches = [
    { symbol: '<=', description: 'Less than or equal to' },
    { symbol: '!=', description: 'Not equal to' },
    { symbol: '<', description: 'Less than' },
    { symbol: '==', description: 'Equal to' },
    { symbol: '>=', description: 'Greater than or equal to' },
    { symbol: '>', description: 'Greater than' },
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.dragItemStyle}>
        <Text style={styles.dragItemTextStyle}>{item}</Text>
      </View>
    );
  };

  const renderZone = (zone, children, hover) => {
    return (
      <View style={{ ...styles.dragZoneStyle, backgroundColor: hover ? '#E2E2E2' : '#FFF' }}>
        <View style={styles.zoneContent}>
          <Text style={styles.dragZoneTextStyle}>{zone.text}</Text>
          <View style={styles.itemsContainerStyle}>
            {children}
          </View>
        </View>
      </View>
    );
  };
  

  const onMaj = (zones, items) => {
    let allCorrect = true;
  
    // Check if all correct matches are found in the zones
    correctMatches.forEach(({ symbol, description }) => {
      const matchedZone = zones.find((zone) => zone.text === description);
      
      // If matched zone is not found or if the matched zone doesn't contain the correct symbol
      if (!matchedZone || !matchedZone.items || matchedZone.items.length !== 1 || matchedZone.items[0] !== symbol) {
        allCorrect = false;
      }
    });
  
    // Check if all items are placed in a zone
    items.forEach(item => {
      const found = zones.some(zone => zone.items && zone.items.includes(item));
      if (!found) {
        allCorrect = false;
      }
    });
  
    // Check if there are any extra items placed in the zones
    zones.forEach(zone => {
      if (zone.items && zone.items.length > 1) {
        allCorrect = false;
      }
    });
  
    if (allCorrect) {
      console.log('All correct!');
      // Navigate to the next question or perform any other action
    } else {
      console.log('Not all correct. Try again.');
      // Provide feedback to the user that they need to try again
    }
  };
  
  return (
    <>
      <View style={styles.questionSection}>
        <Text style={styles.teaching}>{question.teaching}</Text>
        <Text style={styles.question}>{question.question}</Text>
      </View>
      <DragAndDrop
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        itemKeyExtractor={(item) => item}
        zoneKeyExtractor={(zone) => zone.id}
        zones={descriptions}
        items={['<=', '!=', '<', '==', '>=', '>']}
        itemsContainerStyle={styles.itemsContainerStyle}
        zonesContainerStyle={styles.zonesContainerStyle}
        onMaj={onMaj}
        renderItem={renderItem}
        renderZone={renderZone}
      />
    </>
  );
};

const styles = StyleSheet.create({
  questionSection: {
    padding: 10,
    alignItems: "center",
  },
  teaching: {
    backgroundColor: "aliceblue",
    fontFamily: "monospace",
    fontSize: 20,
    marginBottom: 10,
    padding: 10,
  },
  question: {
    fontFamily: "monospace",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  dragZoneStyle: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  dragZoneTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemsContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dragItemStyle: {
    backgroundColor: '#e3e3e3',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  dragItemTextStyle: {
    fontSize: 16,
  },
  zoneContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },  
});

export default PythonSymbolsDragAndDrop;
