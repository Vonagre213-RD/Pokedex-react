import "./Favorites.css"
import PokeCard from '../Content/pokeCard/PokeCard';
import usePokemonData from '../../hooks/usePokeData';
import useFavoritesContext from '../../hooks/useFavoritesContext';
import { useEffect, useState } from 'react';

type PokemonDataType = {
    id: number;
    name: string;
    sprite: string;
    weight: number;
    height: number;
    types: Array<
        {
            slot: number
            type: {
                name: string
                url: string
            }
        }
    >;
};


export default function Favorites() {

    const [favoritesData, setFavoritesData] = useState<PokemonDataType[] | null>(null)
    const { favorites } = useFavoritesContext()
    const { pokemonsData } = usePokemonData()

    useEffect(() => {
        const favoritesPokemon = pokemonsData.filter((pokemon: PokemonDataType) =>
            favorites.includes(pokemon.id)
        );
        setFavoritesData([...favoritesPokemon]);

        
    }, [favorites, pokemonsData])

    if (favoritesData)
        return (
                <section className="favorite__cards">
                    {favoritesData.map((pokemon) => (
                        <PokeCard
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            sprite={pokemon.sprite}
                            weight={pokemon.weight}
                            height={pokemon.height}
                            types={pokemon.types}
                        />
                    ))}
                </section>
        )
}