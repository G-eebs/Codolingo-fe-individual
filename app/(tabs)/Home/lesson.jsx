import { View, Text } from 'react-native';

export default function Lesson(lesson) {
  return (
    <View>
      <Text>{lesson._id}</Text>
    </View>
  );
}
