import './App.css';
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
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    <div>{pokemonIndex > 0 ? <button onClick={handleClickBackward}>Précédent</button> : null}
    {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickForward}>Suivant</button> : null}</div>
  </div>
  );
  }
export default App
