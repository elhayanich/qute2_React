import PropTypes from "prop-types";

function Navbar({handleClickBackward, handleClickForward, pokemonList, pokemonIndex}) {

return (<>
<div>{pokemonIndex > 0 ? <button onClick={handleClickBackward}>Précédent</button> : null}
    {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickForward}>Suivant</button> : null}</div>
</>)
}

Navbar.propTypes = {
    handleClickBackward: PropTypes.func.isRequired,
    handleClickForward: PropTypes.func.isRequired,
    pokemonList: PropTypes.array.isRequired,
    pokemonIndex: PropTypes.number.isRequired
}

export default Navbar