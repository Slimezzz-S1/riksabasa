import { Colors } from "@/constants/theme";
import useColors from "@/hooks/use-colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  const colors = useColors()

  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: colors.accentColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="quiz" options={{ title: "Quiz" }} />
    </Stack>
  );
}