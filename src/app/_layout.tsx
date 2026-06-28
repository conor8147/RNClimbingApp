import { Theme } from "@/src/theme";
import { Stack } from "expo-router";
import { focusManager, onlineManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FavouritesProvider } from "../context/FavouriteCragsProvider";
import { DependencyProvider } from "../context/DependencyContext";
import { AppState, Platform } from "react-native";
import NetInfo from '@react-native-community/netinfo';

const queryClient = new QueryClient();

focusManager.setEventListener((handleFocus) => {
  const subscription = AppState.addEventListener('change', (status) => {
    if (Platform.OS !== 'web') {
      handleFocus(status === 'active');
    }
  });

  return () => subscription.remove();
});

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <DependencyProvider>
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
      </DependencyProvider>
    </QueryClientProvider>
  )
}
