import { View, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "../theme";
import TopBar from "../components/TopBar";
import { Area, AreaOverview } from "../entity/area";
import { Entypo } from "@expo/vector-icons";
import { InfoListItem } from "../components/InfoListItem";
import { RouteListItem } from "../components/RouteListItem";
import { useLocalSearchParams, useRouter } from "expo-router";
import useAreaDetails from "../hooks/useAreaDetails";


export function AreaDetailsScreen() {
  const router = useRouter();
  const { areaJson } = useLocalSearchParams<{ areaJson?: string }>();
  console.log(areaJson)
  const areaOverview = (JSON.parse(areaJson!) as AreaOverview);

  console.log(areaOverview.id)
  const { data, isLoading, error } = useAreaDetails(areaOverview.id)

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.container}
    >
      <TopBar
        leadingIcon={<Entypo name={'chevron-left'} size={24} color={Theme.colors.text} />}
        onLeadingPress={() => router.back()}
        title={areaOverview.name}
      />
      <AreaScreenContent data={data} isLoading={isLoading} error={error} />
    </SafeAreaView>
  )
}

function AreaScreenContent({
  data,
  isLoading,
  error
}: {
  data: Area | null | undefined,
  isLoading: boolean,
  error: Error | null,
}) {
  if (isLoading) return <LoadingContent />
  if (error || !data) return <ErrorContent />
  return <AreaView area={data} />
}

function AreaView({ area }: { area: Area }) {
  return <ScrollView style={styles.scrollContainer}>
    <View style={styles.imageContainer} />
    <InfoListItem
      title={"Description"}
      content={area.description} />
    <Text style={styles.routesHeader}>Routes:</Text>
    {area.routes.map((route) => {
      return (<RouteListItem
        key={route.name}
        route={route}
      />);
    })}
  </ScrollView>;
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
  scrollContainer: {
    paddingHorizontal: 16
  },
  imageContainer: {
    width: '120%',
    height: 150,
    backgroundColor: Theme.colors.greyContainer,
    marginHorizontal: -16
  },
  routesHeader: {
    ...Theme.typography.headingMedium,
    paddingTop: 10,

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
})
