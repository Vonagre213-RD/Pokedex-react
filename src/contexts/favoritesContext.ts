import React, { createContext, type SetStateAction } from "react";

type favoritesContextType = {
    favorites:number[],
    setFavorites: React.Dispatch<SetStateAction<number[]>>
}


export const FavoritesContext = createContext<favoritesContextType | null>(null);

