import { useRouter } from "next/router";
import React from "react";

const Pokemons = ({ pokemon }) => {
  const { id, img, name } = pokemon;

  const router = useRouter()

  return (
    <div onClick={() => router.push(`/pokemon/${id}`)} className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center w-80 py-2 mx-auto hover:scale-105 transition-all cursor-pointer">
      <div>
        <span className="text-xl font-bold text-white dark:text-white">{name}</span>
        <img className="mx-auto mt-3 w-2/3 h-fit" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Pokemons;
