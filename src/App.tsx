import { useState } from 'react'
import { Route, Routes } from 'react-router'
import usePokemonData from './hooks/usePokeData.tsx'

import './App.css'
import Header from './components/Header/header.tsx'
import Content from './components/Content/content.tsx'
import SideBar from './components/sideBar/sideBar.tsx'
import Favorites from './components/Favorites/Favorites.tsx'

function App() {
  const { pokemonsData } = usePokemonData()
  const [filterName, setFilterName] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('');

  const filteredData = pokemonsData.filter(pokemon => {
    const matchesType = filterType === '' || pokemon.types.some(t => t.type.name === filterType);
    const matchesName = filterName === '' || pokemon.name.toLowerCase().includes(filterName.toLowerCase());

    return matchesType && matchesName;
  });

  return (
    <div className="mainContainer">
      <Header setFilterName={setFilterName} />

      <Routes>
        <Route path='/' element={
          <div className="contentWrapper">
            <SideBar setFilterType={setFilterType} />
            <Content data={filteredData} />
          </div>} />
        <Route path='/Favorites' element={
          <div className="favoritesWrapper"><Favorites/></div>} />
      </Routes>


      <footer className='footer'>

      </footer>
    </div >
  )
}

export default App
