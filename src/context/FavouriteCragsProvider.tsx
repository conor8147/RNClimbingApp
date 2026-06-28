import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { FavouritesStore } from "../data/local/FavouritesStore";
import { CragOverview } from "../entity/crag";
import { useDeps } from "./DependencyContext";

export type FavouritesType = {
  favourites: CragOverview[];
  toggleFavourite: (crag: CragOverview) => void;
}

const FavouritesContext = createContext<FavouritesType>({
  favourites: [],
  toggleFavourite: () => { console.error('Remember to wrap the root view in this provider') },
});

export function FavouritesProvider(
  { children }: { children: ReactNode }
) {
  const store = FavouritesStore
  const cragRepo = useDeps().cragRepository

  const [favourites, setFavourites] = useState<CragOverview[]>([]);

  useEffect(() => {
    async function loadStoredFavourites() {
      const savedCragIds = await store.getFavouriteCrags();
      const allCrags = await cragRepo.getCrags();

      const savedCrags: CragOverview[] = allCrags?.filter((crag) => {
        return savedCragIds.some(fav => fav === crag.id);
      }) ?? [];
      setFavourites(savedCrags);
    }

    loadStoredFavourites();
  }, []);


  const toggleFavourite = (crag: CragOverview) => {
    let newState = favourites
    console.log("existing: " + favourites.map ((fav) => fav.name))
    try {
      if (favourites.find((it) => it.id == crag.id)) {
        newState = favourites.filter(x => x.id != crag.id)
      } else {
        newState = [...favourites, crag]
      }
      store.saveFavouriteCrags(newState)
    } catch (e) {
      console.error(e)
    }
    setFavourites(newState);
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export const useFavouriteCrags = () => useContext(FavouritesContext);