import { useMemo, useState } from "react";

export function useFavouriteCrags(initialFavourites: Record<number, boolean> = {}) {
  const [favourites, setFavourites] = useState<Record<number, boolean>>(initialFavourites);

  const toggleFavourite = (id: number) => {
    setFavourites((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  const isFavourite = (id: number) => Boolean(favourites[id]);

  return useMemo(
    () => ({
      favourites,
      toggleFavourite,
      isFavourite,
    }),
    [favourites],
  );
}
