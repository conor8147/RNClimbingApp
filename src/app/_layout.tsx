import { Theme } from "@/src/theme";
import { Stack } from "expo-router";


export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: { backgroundColor: Theme.colors.surface},
      headerTintColor: Theme.colors.primary,
      headerTitleStyle: Theme.typography.body,
      contentStyle: { backgroundColor: Theme.colors.primary },
    }}
  >
    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }}
    />

  </Stack>;
}
