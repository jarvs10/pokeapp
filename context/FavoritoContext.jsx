import { createContext, useState } from "react"
import React from 'react'

export const FavoritoContext = createContext();

const FavoritosProvider = ({children}) => {

  const [favorito, setFavorito] = useState([])

  return (
    <FavoritoContext.Provider value={[favorito, setFavorito]}>
      {children}
    </FavoritoContext.Provider>
  )
}

export default FavoritosProvider