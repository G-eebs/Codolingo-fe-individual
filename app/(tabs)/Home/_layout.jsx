import { Stack } from "expo-router/stack";

export default function home() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          href: null,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[lesson]"
        options={{
          title: "Lesson",
          href: null,
        }}
      />
    </Stack>
  );
}
