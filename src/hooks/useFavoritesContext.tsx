import { useContext} from "react";
import { FavoritesContext } from "../contexts/favoritesContext";

export default function useFavoritesContext() {
    const context = useContext(FavoritesContext)

    if (!context) {
        throw new Error("The component must be inside favoritesProvider")
    }


    const { favorites, setFavorites } = context

    
    return { favorites, setFavorites }

}