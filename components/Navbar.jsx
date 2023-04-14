import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-7 px-3 bg-slate-600 items-center text-white">
      <Link href={'/'}><h1 className="text-4xl font-bold">Pokemons</h1></Link> 

      <nav>
        <Link className="text-2xl font-bold hover:text-black" href={'/favoritos'}>❤ Favoritos</Link>
      </nav>
    </div>
  );
};

export default Navbar;
