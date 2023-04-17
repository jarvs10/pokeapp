import Layout from "@/components/Layout";
import { FavoritoContext } from "@/context/FavoritoContext";
import axios from "axios";
import React, { useContext } from "react";

const PokemonFilter = ({ pokemon }) => {
  const [favorito, setFavorito] = useContext(FavoritoContext);

  return (
    <Layout>
      <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center w-80 py-2 mx-auto mt-8">
        <div>
          <span className="text-xl font-bold text-white dark:text-white">
            {pokemon[0].name}
          </span>
          <img
            className="mx-auto mt-3 w-2/3 h-fit mb-4"
            src={pokemon[0].img}
            alt="img"
          />

          <button
            onClick={() => setFavorito([...favorito, pokemon[0]])}
            className="bg-green-600 hover:bg-green-800 py-2 px-3 rounded-md text-white font-semibold"
          >
            Agregar a Favorito
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PokemonFilter;

export const getStaticPaths = async () => {

  const pokemons = [...Array(200)].map(( value, i ) => `${i + 1}`);

  return {
    paths : pokemons.map(id => ({
      params: {id}
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const pokemon = await data.forms.map((poke) => ({
    ...poke,
    id: id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
  }));

  return {
    props: {
      pokemon,
    },
  };
};

// export const getServerSideProps = async ({params: {id}}) => {
//   const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

//   const pokemon = await data.forms.map((poke) => ({
//     ...poke,
//     img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
//   }));

//   return {
//     props: {
//       pokemon,
//     },
//   };
// }
