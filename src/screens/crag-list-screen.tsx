import { InfoCard } from "@/src/components/InfoCard";
import { Search } from "@/src/components/Search";
import TopBar from "@/src/components/TopBar";
import { useFavouriteCrags } from "@/src/hooks/useFavouriteCrags";
import { Theme } from "@/src/theme";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCragList } from "../hooks/useCragListScreen";

export default function CragListScreen() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const state = useCragList();

  const crags = state.status === "content" ? state.content : [];

  const initialFavourites = useMemo(
    () =>
      Object.fromEntries(
        crags
          .filter((crag) => crag.isFavourite)
          .map((crag) => [crag.id, true]),
      ),
    [crags],
  );

  const { isFavourite, toggleFavourite } = useFavouriteCrags(initialFavourites);

  const filteredCrags = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return crags;
    }

    return crags.filter((crag) =>
      crag.name.toLowerCase().includes(searchTerm),
    );
  }, [crags, query]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TopBar
        title="Home"
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Search
          style={styles.searchBar}
          hintText="Search crags or routes"
          onContentChanged={setQuery}
        />

        {state.status === "loading" && (
          <Text style={styles.emptyState}>Loading crags...</Text>
        )}

        {state.status === "error" && (
          <Text style={styles.emptyState}>{state.error.message}</Text>
        )}

        {query !== "" && (
          <View style={styles.resultsHeader}>
            <Text style={styles.resultsMeta}>{filteredCrags.length} results</Text>
          </View>
        )}

        {filteredCrags.map((crag) => {
          const favourite = isFavourite(crag.id);

          return (
            <InfoCard
              key={crag.id}
              title={crag.name}
              subtitle={`${crag.location} · ${crag.routeCount}`}
              onPress={() =>
                router.push({
                  pathname: "/crag-details" as any,
                  params: { crag: JSON.stringify(crag) },
                })
              }
              style={styles.featuredCard}
              rightIcon={
                <Pressable
                  style={styles.favouritePressable}
                  onPress={(event) => {
                    event.stopPropagation();
                    toggleFavourite(crag.id);
                  }}
                  accessibilityRole="button"
                >
                  <Entypo
                    name={favourite ? "heart" : "heart-outlined"}
                    size={24}
                    color={Theme.colors.text}
                  />
                </Pressable>
              }
            />
          );
        })}

        {state.status === 'content' && filteredCrags.length === 0 && (
          <Text style={styles.emptyState}>No crags match your search.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  content: {
    paddingTop: 22,
    paddingBottom: 32,
  },
  searchBar: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  featuredCard: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  resultsLabel: {
    ...Theme.typography.headingMedium,
  },
  resultsMeta: {
    ...Theme.typography.caption,
  },
  emptyState: {
    ...Theme.typography.bodySmall,
    color: Theme.colors.textMuted,
    marginHorizontal: 16,
  },
  favouritePressable: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
