import { Theme } from "@/src/theme";
import { Stack } from "expo-router";
import { FavouritesProvider } from "../hooks/FavouriteCragsProvider";


export default function RootLayout() {
  return (
    <FavouritesProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Theme.colors.surface },
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
        <Stack.Screen
          name="area-details"
          options={{ headerShown: false }}
        />
      </Stack>
    </FavouritesProvider>
  )
}
