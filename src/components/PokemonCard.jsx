function PokemonCard({pokemon}) {
  return (<figure>
      <div>{pokemon.imgSrc !== undefined ? <img src= {pokemon.imgSrc} alt= {pokemon.name}/> : <p>???</p>}</div>
      <figcaption>{pokemon.name}</figcaption>
  </figure>
  );
}

export default PokemonCard;