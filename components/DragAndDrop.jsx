import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DragAndDrop from 'volkeno-react-native-drag-drop';

const PythonSymbolsDragAndDrop = ({ question, setUserAnswer }) => {

  useEffect(()=> {setUserAnswer([])}, [])

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
  
    correctMatches.forEach(({ symbol, description }) => {
      const matchedZone = zones.find((zone) => zone.text === description);
      
      if (!matchedZone || !matchedZone.items || matchedZone.items.length !== 1 || matchedZone.items[0] !== symbol) {
        allCorrect = false;
      }
    });
  
    items.forEach(item => {
      const found = zones.some(zone => zone.items && zone.items.includes(item));
      if (!found) {
        allCorrect = false;
      }
    });
  
    zones.forEach(zone => {
      if (zone.items && zone.items.length > 1) {
        allCorrect = false;
      }
    });
  
    if (allCorrect) {
      setUserAnswer(["==", "!=", ">", "<", ">=", "<="])
    } else {
      setUserAnswer([])
    }
  };
  
  return (
    <>
      <View style={styles.questionSection}>
        <Text style={styles.teaching}>{question.teaching}</Text>
        <Text style={styles.question}>{question.question}</Text>
      </View>
      <DragAndDrop
        maxItemsPerZone={1}
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
