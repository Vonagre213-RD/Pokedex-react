import { FavoritesContext } from "../favoritesContext"
import { useState, useEffect } from "react"

type contextProvider = {
    children: React.ReactNode
}

export default function FavoritesContextProvider({ children }: contextProvider) {
    const [favorites, setFavorites] = useState<number[]>(() => {
        const recoveredFavorites = localStorage.getItem('favoritesPokemons')
        return recoveredFavorites ? JSON.parse(recoveredFavorites) : []
    })

    useEffect(() => {
        const favoritesJSON = JSON.stringify(favorites)
        localStorage.setItem('favoritesPokemons', favoritesJSON)
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}
