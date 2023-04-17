import Layout from "@/components/Layout";
import Pokemons from "@/components/Pokemons";
import { FavoritoContext } from "@/context/FavoritoContext";
import React, { useContext } from "react";

const Favoritos = () => {
  const [favorito] = useContext(FavoritoContext);

  return (
    <Layout title="Favorites" description="Favorites Pokemon">
      <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 gap-4 mt-8'>
      {favorito.map((pokemon) => {
          return (
            <Pokemons 
              key={pokemon.url} 
              pokemon={pokemon} 
            />
          ) 
        })}
     </div>
    </Layout>
  );
};

export default Favoritos;
