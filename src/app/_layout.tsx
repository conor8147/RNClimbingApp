import { Theme } from "@/src/theme";
import { Stack } from "expo-router";
import { focusManager, onlineManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FavouritesProvider } from "../context/FavouriteCragsProvider";
import { DependencyProvider } from "../context/DependencyContext";
import { AppState, Platform } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import { createMMKV, MMKV } from "react-native-mmkv";

const storage: MMKV = createMMKV();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24 * 7, // Set expiry to 7 days
      staleTime: 1000 * 60 * 5,        // Set stale to 5 minutes
    },
  },
});

const mmkvSyncStorage = {
  setItem: (key: string, value: string) => storage.set(key, value),
  getItem: (key: string) => storage.getString(key) ?? null,
  removeItem: (key: string) => storage.remove(key),
};

const clientPersister = createSyncStoragePersister({
  storage: mmkvSyncStorage,
  key: 'CLIMBING_GUIDEBOOK_CACHE',
  throttleTime: 1000, 
});

persistQueryClient({
  queryClient,
  persister: clientPersister,
  maxAge: 1000 * 60 * 60 * 24 * 14, // Evict records after two weeks

  shouldDehydrateQuery: (query: any) => {
    const meta = query.meta as { persist?: boolean; isLastViewedArea?: boolean} | undefined;

    if (meta?.persist || meta?.isLastViewedArea) return true;

    return false;
  }
})

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
function createSyncStoragePersister(arg0: { storage: { setItem: (key: string, value: string) => void; getItem: (key: string) => string | null; removeItem: (key: string) => boolean; }; key: string; throttleTime: number; }) {
  throw new Error("Function not implemented.");
}

function persistQueryClient(arg0: {}) {
  throw new Error("Function not implemented.");
}

