import ImageCard from "@/src/components/ImageCard";
import { InfoCard } from "@/src/components/InfoCard";
import { InfoListItem } from "@/src/components/InfoListItem";
import { RouteListItem } from "@/src/components/RouteListItem";
import { Search } from "@/src/components/Search";
import TopBar from "@/src/components/TopBar";
import { Theme } from "@/src/theme";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Preview() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>

        <TopBar
          leadingIcon={
            <Entypo name={'chevron-left'}
              size={24}
              color={Theme.colors.text}
            />
          }
          title='Madge McDonald'
          trailingIcon={
            <Entypo name={'heart'}
              size={24}
              color={Theme.colors.text}
            />
          }
        />

        <ScrollView
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'column',
            paddingHorizontal: 16,
          }}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              paddingVertical: 16
            }}
          >
            <ImageCard
              imgSrc={require('@/assets/images/default.jpeg')}
              title={"Shipley Upper"}
              subtitle={"Blackheath"}
              onPress={() => { }}
              onIconPress={() => {}}
              icon={<Entypo name={'heart'}
                size={24}
                color={Theme.colors.text}
              />}
              style={{ flex: 1 }}
            />

            <ImageCard
              imgSrc={require('@/assets/images/default.jpeg')}
              title={"Shipley Upper"}
              subtitle={"Blackheath"}
              onPress={() => { }}
              onIconPress={() => {}}
              icon={<Entypo name={'heart'}
                size={24}
                color={Theme.colors.text}
              />}
              style={{ flex: 1 }}
            />
          </View>

          <Search
            style={styles.searchBarStyle}
            hintText={"Search for crags..."}
            onContentChanged={() => { }}
          />

          <InfoListItem
            title="Description"
            content={cragDescription}
            style={styles.listItemStyle}
          />

          <RouteListItem route={{
            topoNumber: 1,
            name: "Rubber Lover",
            grade: "25",
            description: routeDescription,
            type: "sport",
            stars: 3,
            length: 16,
            boltCount: 4,
          }}
            style={styles.listItemStyle}
          />
          <InfoListItem
            title="Description"
            content={"This is a short"}
            style={styles.listItemStyle}
          />

          <InfoCard
            title="Centennial Glen"
            subtitle="Blackheath"
            style={styles.cardStyle}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 12,
    alignSelf: 'stretch',
  },
  listItemStyle: {
    alignSelf: 'stretch',
  },
  searchBarStyle: {
    alignSelf: 'stretch',

  }
});

const cragDescription = "The home of sport climbing in Australia. This controversial area has been the scene of some very public debates about ethics of all kinds: chipping, bolting, climbers' toileting habits, interactions with bushwalkers, and even the climbing environment itself. Note that chipped holds did occur here, but they have all been filled in years ago. Nowadays chipping is NOT acceptable here (or anywhere else for that matter). The climbing is short, fun and very very sporty."
const routeDescription = "One of the popular classics of the grade. Ringbolts and chalk show the way. All good fun. Lower-offs added 2004 and replaced 2021. This route originally went to a set of chains a couple of metres above the lower offs. The chains are still there. Was grade 26 but was chipped after the first ascent."