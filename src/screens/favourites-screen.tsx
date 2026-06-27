import { Entypo } from "@expo/vector-icons";
import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCard from "../components/ImageCard";
import TopBar from "../components/TopBar";
import { useFavouriteCrags } from "../hooks/FavouriteCragsProvider";
import { Theme } from "../theme";
import { useRouter } from "expo-router";

export default function FavouritesScreen() {
  const { favourites, toggleFavourite } = useFavouriteCrags();
  const router = useRouter();
  return <SafeAreaView
    edges={['top', 'left', 'right']}
    style={styles.safeArea}
  >
    <TopBar title={"Liked"} />
    <FlatList
      numColumns={2}
      data={favourites}
      renderItem={({ item }) =>
        <ListItem
          title={item.name}
          subtitle={item.location}
          style={styles.imageCard}
          onPress={() => {
            router.push({
              pathname: "/crag-details" as any,
              params: { crag: JSON.stringify(item) },
            })
          }}
          onIconPress={() => {
            toggleFavourite(item)
          }} />
      }
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContainer}
      style={{ flex: 1 }}
    >

    </FlatList>
  </SafeAreaView>
}

type ItemProps = {
  title: string,
  subtitle: string,
  onPress: () => void,
  onIconPress: () => void,
  style?: StyleProp<ViewStyle>,
}

const ListItem = ({
  title,
  subtitle,
  onPress,
  onIconPress,
  style
}: ItemProps) => {
  return (
    <ImageCard
      imgSrc={require('@/assets/images/default.jpeg')}
      title={title}
      subtitle={subtitle}
      onPress={onPress}
      onIconPress={onIconPress}
      icon={<Entypo name={'heart'}
        size={24}
        color={Theme.colors.text}
      />}
      style={style}
    />
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  listContainer: {
    padding: 16,
    gap: 8,
  },
  row: {
    flex: 1,
    gap: 8,
    justifyContent: 'space-between',
  },
  imageCard: {
    flex: 1,
    maxWidth: '49%'
  }
})