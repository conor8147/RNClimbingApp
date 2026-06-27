import AsyncStorage from "@react-native-async-storage/async-storage";
import { CragOverview } from "../entity/crag";

export const FavouritesStore = {
  async getFavouriteCrags(): Promise<number[]> {
    return getData();
  },

  async saveFavouriteCrags(crags: CragOverview[]) {
    console.log(crags)
    return storeData(crags.map((item) => item.id));
  }
}

const storeData = async (cragIds: number[]) => {
  try {
    await AsyncStorage.setItem(KEY, cragIds.join(','))
  } catch (e) {
    console.error('Error saving data', e)
  }
};

const getData = async (): Promise<number[]> => {
  try {
    const result = await AsyncStorage.getItem(KEY)
    return result?.split(',')
      ?.map(Number)
      ?? [];

  } catch (e) {
    console.error('Error reading data', e);
    return [];
  }
}

const KEY = 'favourites-key'