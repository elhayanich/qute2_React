import PropTypes from "prop-types";

function Navbar({pokemonList, setPokemonIndex}) {


const handleClick = (index) => {
    setPokemonIndex(index)
}

return (<>
    {pokemonList.map((x, index) => (
        <button key={x.name} onClick={() => handleClick(index)}>
            {x.name}
        </button>
    ))}
</>)
}

Navbar.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    setPokemonIndex: PropTypes.number.isRequired
}

export default Navbar