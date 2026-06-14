import { Entypo } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import { CragOverview } from "../entity/crag";
import { Theme } from "../theme";
import { InfoListItem } from "../components/InfoListItem";
import { testCrag } from "../data/repository/CragRepository";
import { InfoCard } from "../components/InfoCard";

export function CragDetailsScreen() {
  const router = useRouter();
  const { crag } = useLocalSearchParams<{ crag?: string }>();
  const cragOverview = crag ? (JSON.parse(crag) as CragOverview) : null;

  const cragDetails = testCrag;

  if (!cragOverview) {
    return (
      <SafeAreaView style={styles.container}>
        <TopBar title="Crag details" />
        <View style={styles.content}>
          <Text style={styles.emptyState}>Crag details are unavailable.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        title={cragOverview.name}
        leadingIcon={
          <Pressable
            style={{ width: 24, height: 24 }}
            onPress={() => router.back()}
            accessibilityRole="button"
          >
            <Entypo name={'chevron-left'} size={24} color={Theme.colors.text} />
          </Pressable>
        }
        trailingIcon={
          <Entypo
            name={cragOverview.isFavourite ? 'heart' : 'heart-outlined'}
            size={24}
            color={Theme.colors.text}
          />
        }
      />
      <ScrollView style={styles.content}>
        <View style={styles.imageContainer} />
        <InfoListItem
          title="Description:"
          content={cragDetails.description}
        />
        <InfoListItem
          title="Approach:"
          content={cragDetails.approach}
        />
        <Text style={styles.areasHeaderText}>Areas:</Text>

        {cragDetails.areas.map((area) => {
          return (
            <InfoCard
              title={area.name}
              subtitle={area.routeCount}
              style={styles.areaCard}
            />
          )
        })}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  imageContainer: {
    width: '120%',
    height: 150,
    backgroundColor: Theme.colors.greyContainer,
    marginHorizontal: -16
  },
  content: {
    paddingHorizontal: 16,
  },
  emptyState: {
    ...Theme.typography.body,
    color: Theme.colors.textMuted,
  },
  areasHeaderText: {
    ...Theme.typography.headingMedium,
    marginTop: 12,
    marginBottom: 12,
  },
  areaCard: {
    marginBottom: 12
  }
});