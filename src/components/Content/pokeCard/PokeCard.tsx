
import './pokeCard.css'
import useFavoritesContext from '../../../hooks/useFavoritesContext';

type props = {
    id: number;
    name: string;
    sprite: string;
    weight: number;
    height: number;
    types: Array<{
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }>;
};

const typeColors: Record<string, string> = {
    fire: 'var(--color-red-600)',
    water: 'var(--color-blue-600)',
    grass: 'var(--color-green-600)',
    electric: 'var(--color-yellow-500)',
    psychic: 'var(--color-pink-500)',
    normal: 'var(--color-gray-500)',
    flying: 'var(--color-sky-400)',
    bug: 'var(--color-lime-600)',
    rock: 'var(--color-stone-600)',
    ground: 'var(--color-amber-700)',
    ghost: 'var(--color-indigo-700)',
    dragon: 'var(--color-orange-600)',
    dark: 'var(--color-neutral-800)',
    steel: 'var(--color-zinc-400)',
    fairy: 'var(--color-pink-400)',
    ice: 'var(--color-cyan-300)',
    poison: 'var(--color-purple-700)',
    fighting: 'var(--color-orange-800)'
};
export default function PokeCard(props: props) {

    const { favorites, setFavorites } = useFavoritesContext();
    const isFavorite = favorites.includes(props.id)
    const toggleFavorite = (pokeID: number) => {

        
        if(isFavorite){
            const updatedFavorites = favorites.filter(id => id !== pokeID)
            setFavorites(updatedFavorites)
        }
        else{
            setFavorites([...favorites, pokeID])
        }
    }   

    
    
    return (
        <article className="pokeCard__container">
            <span className="favoriteMarker--wrapper">
                <h3 className="pokeCard__pokeID">#{props.id}</h3>
                <button onClick={() => toggleFavorite(props.id)} title="favoriteMarker" style={{backgroundColor: isFavorite ? 'var(--color-yellow-500)' : 'white'}} value={props.id} className="pokeCard__favoriteMarker"></button>
            </span>
            <img src={props.sprite} alt={props.name} className="pokeCard__image" />
            <h3 className="pokeCard__name">{props.name}</h3>

            {props.types.map(({ type }) => (
                <div
                    key={type.name}
                    className="pokeCard__pokeType"
                    style={{ backgroundColor: typeColors[type.name] || 'var(--color-gray-300)', color: 'white' }}
                >
                    {type.name}
                </div>
            ))}
            <div className="pokeCard__pokeWeightAndHeight">
                <span>{props.weight}kg</span>
                <span>{props.height}m</span>
            </div>
        </article>
    );
}
