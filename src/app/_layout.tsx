import { Theme } from "@/src/theme";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";


export default function RootLayout() {
  return <>
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Theme.colors.surface},
        headerTintColor: Theme.colors.primary,
        headerTitleStyle: Theme.typography.bodySmall,
        contentStyle: { backgroundColor: Theme.colors.primary },
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="crag-details"
        options={{ headerShown: false }}
      />
    </Stack>
    <Toast />
  </>;
}
