import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

const pokemonList = [
  {

    name: "bulbasaur",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

  },

  {

    name: "charmander",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

  },

  {

    name: "squirtle",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

  },

  {

    name: "pikachu",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

  },

  {

    name: "mew",

  },
];


function App() {

  useEffect(
    ()=>{
      alert("Hello Pokemon Trainer! :)");
    },
    []
  );
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
  <>
    <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
  </>
  )
}

export default App;
