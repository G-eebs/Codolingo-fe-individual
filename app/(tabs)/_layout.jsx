import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="Index"
        options={{
          title: 'Home',
         
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Settings',
          
        }}
      />
    </Tabs>
  );
}