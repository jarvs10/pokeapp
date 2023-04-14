import Layout from '@/components/Layout';
import Pokemons from '@/components/Pokemons';
import axios from 'axios';

export default function Home({pokemons}) {

  return (
    <Layout
      title='PokemonsApp'
      description='151 pokemons'
    >
     
     <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
      {
        pokemons.map(pokemon => {
          return (
            <Pokemons 
              key={pokemon.id}
              pokemon={pokemon}
            />
          )
        })
      }
     </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200');
  const pokemons = await data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}
