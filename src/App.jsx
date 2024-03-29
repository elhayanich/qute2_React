import './App.css';
import Navbar from './components/Navbar';
import PokemonCard from './components/PokemonCard';
import { useState } from "react";

function App() {
  const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];
  
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickForward = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const handleClickBackward = () => {
    setPokemonIndex(pokemonIndex - 1)
}
  return (
  <div>
    <Navbar 
    handleClickBackward = {handleClickBackward}
    handleClickForward = {handleClickForward}
    pokemonList = {pokemonList}
    pokemonIndex = {pokemonIndex}/>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
  </div>
  );
  }
export default App