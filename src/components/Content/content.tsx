
import './content.css'
import PokeCard from './pokeCard/PokeCard';

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
type ContentProps = {
    data: PokemonDataType[];
};
export default function Content({ data }: ContentProps) {

    

    return (
        <section className="content__cards">
            {data.map((pokemon) => (
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