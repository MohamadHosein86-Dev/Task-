import React, { createContext, useContext, useEffect, useState } from "react";
import type { Favorite } from "../types/types";

const LS_KEY = "meal_favs_v1";

type FavCtx = {
  favorites: Favorite[];
  add: (meal: Favorite) => void;
  remove: (id: string) => void;
  toggle: (meal: Favorite) => void;
  isFav: (id: string) => boolean;
};

const FavoriteContext = createContext<FavCtx | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const add = (meal: Favorite) => {
    if (!favorites.find((f) => f.id === meal.id)) {
      setFavorites([...favorites, meal]);
    }
  };

  const remove = (id: string) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  const toggle = (meal: Favorite) => {
    if (favorites.find((f) => f.id === meal.id)) remove(meal.id);
    else add(meal);
  };

  const isFav = (id: string) => favorites.some((f) => f.id === id);

  return <FavoriteContext.Provider value={{ favorites, add, remove, toggle, isFav }}>{children}</FavoriteContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoriteContext);
  if (!ctx) throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
}
