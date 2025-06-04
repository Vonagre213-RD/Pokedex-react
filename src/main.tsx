import { StrictMode } from 'react'
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import FavoritesContextProvider from './contexts/providers/favoriteContextProvider.tsx'
import './TailWindLikeTraditionalVariables/Import/variablesImportations.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </StrictMode>,
)
