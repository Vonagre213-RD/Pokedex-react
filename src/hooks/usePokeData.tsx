import useFetch from "./usefetch";
import { useState, useEffect } from "react";
type pokemonDataType = {
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
type PokemonBaseData = {
    results: {
        name: string;
        url: string;
    }[];
}
export default function usePokemonData() {

    const [pokemonsData, setPokemonData] = useState<pokemonDataType[]>([])

    const { data: pokemonBasedata } = useFetch<PokemonBaseData>({ url: 'https://pokeapi.co/api/v2/pokemon?limit=450' })

    useEffect(() => {
        const fetchAllPokemon = async () => {
            if (!pokemonBasedata) return

            const urls = pokemonBasedata.results.map((p) => p.url)

            const promises = urls.map(async (url) => {
                const res = await fetch(url);
                const data = await res.json();

                const pokemonData : pokemonDataType = {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.back_default,
                    weight: data.weight,
                    height: data.height,
                    types: data.types 
                };

                return pokemonData
            });

            const result = await Promise.all(promises)
            setPokemonData(result);
        }
        fetchAllPokemon()
    }, [pokemonBasedata])

    return {pokemonsData}
}