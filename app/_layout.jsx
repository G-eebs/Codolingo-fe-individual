import { Stack } from "expo-router/stack";
import { UserProvider } from "../contexts/User"

export default function Layout() {
  return (
    <UserProvider>
     <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
