import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
    return (<figure>
        <div>{pokemon.imgSrc !== undefined ? <img src= {pokemon.imgSrc} alt= {pokemon.name}/> : <p>???</p>}</div>
        <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
}

PokemonCard.propTypes = {

    pokemon: PropTypes.shape({
  
      name: PropTypes.string.isRequired,
  
      imgSrc: PropTypes.string,
  
    }).isRequired,
  
  }

export default PokemonCard;