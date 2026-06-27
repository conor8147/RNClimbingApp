import { Entypo } from "@expo/vector-icons";
import { Router, useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InfoCard } from "../components/InfoCard";
import { InfoListItem } from "../components/InfoListItem";
import TopBar from "../components/TopBar";
import { Crag, CragOverview } from "../entity/crag";
import { Theme } from "../theme";
import { useFavouriteCrags } from "../hooks/FavouriteCragsProvider";
import useCragDetails, { CragDetailsUIState } from "../hooks/useCragDetails";

export function CragDetailsScreen() {
  const router = useRouter();
  const { crag } = useLocalSearchParams<{ crag?: string }>();
  const cragOverview = (JSON.parse(crag!) as CragOverview);
  const { favourites, toggleFavourite } = useFavouriteCrags();
  const isFavourite = favourites.some(fav => fav.id === cragOverview.id);

  const state = useCragDetails(cragOverview.id);

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.container}>
      <ScreenTopBar cragOverview={cragOverview} router={router} isFavourite={isFavourite} toggleFavourite={toggleFavourite} />
      <CragView state={state} />

    </SafeAreaView>
  );
}

function CragView({ state }: { state: CragDetailsUIState }) {
  switch (state.status) {
    case 'loading': return <LoadingContent />
    case 'error': return <ErrorContent />
    case 'content': return <CragContent cragDetails={state.content} />
  }
}

function ScreenTopBar({ cragOverview, router, isFavourite, toggleFavourite }:
  { cragOverview: CragOverview, router: Router, isFavourite: boolean, toggleFavourite: (crag: CragOverview) => void }
) {
  return <TopBar
    title={cragOverview.name}
    leadingIcon={<Entypo name={'chevron-left'} size={24} color={Theme.colors.text} />}
    onLeadingPress={() => router.back()}
    onTrailingPress={() => toggleFavourite(cragOverview)}
    trailingIcon={<Entypo
      name={isFavourite ? 'heart' : 'heart-outlined'}
      size={24}
      color={Theme.colors.text} />}
  />;
}

function CragContent({ cragDetails }: { cragDetails: Crag }) {
  const router = useRouter();
  return (
    <ScrollView style={styles.content}>
      <View style={styles.imageContainer} />
      <InfoListItem
        title="Description:"
        content={cragDetails.description} />
      <InfoListItem
        title="Approach:"
        content={cragDetails.approach} />
      <Text style={styles.areasHeaderText}>Areas:</Text>

      {cragDetails.areas.map((area) => {
        return (
          <InfoCard
            key={area.id}
            title={area.name}
            subtitle={area.routeCount}
            style={styles.areaCard}
            onPress={() => {
              console.log("Here it is: " + JSON.stringify(area))
              router.push({
                pathname: "/area-details" as any,
                params: { areaJson: JSON.stringify(area) },
              })
            }}
          />
        );
      })}
    </ScrollView>
  );
}

function ErrorContent() {
  return (<View style={styles.errorContainer}>
    <Text>There was an error</Text>
  </View>)
}

function LoadingContent() {
  return (<View style={styles.loadingContainer}>
    <Text>Loading...</Text>
  </View>)
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
    ...Theme.typography.bodySmall,
    color: Theme.colors.textMuted,
  },
  areasHeaderText: {
    ...Theme.typography.headingMedium,
    marginTop: 12,
    marginBottom: 12,
  },
  areaCard: {
    marginBottom: 12
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    padding: 16
  }
});