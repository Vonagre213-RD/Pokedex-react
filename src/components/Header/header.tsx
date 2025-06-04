
import type React from 'react'
import { Link } from 'react-router';
import './header.css'

type props = {
    setFilterName: React.Dispatch<React.SetStateAction<string>>;
}
export default function Header({ setFilterName }: props) {

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterName(event.target.value);
        console.log(event.target.value)
    }
    return (
        <header className="header">
            <h2 className="header__pageTitle">PokeDex</h2>
            <span className="header__navButtons">
                <Link className='header__navButton' to='/'>Pokemons</Link>
                <Link className='header__navButton' to='/Favorites'>Favoritos</Link>
            </span>
            <input onChange={handleInputValue} className="header__pokemonSearchBar" type="text" placeholder='Buscar pokemon' />
        </header>
    )
}