import './buttons.css';

const NavBar = ({pokemonList, setPokemonIndex}) => {
  // const handleClickNext = () => {
  //   setPokemonIndex(pokemonIndex + 1);
  // }
  // const handleClickPrevious = () => {
  //     setPokemonIndex(pokemonIndex - 1);
  // }
  return (
    <div className='navbar'>
      <ul>
        {pokemonList.map((poke, index) =>(
          <button className='navbuttons' key={poke.name} onClick={()=>setPokemonIndex(index)}>{poke.name}</button>
        ))}
      </ul>
    </div>

    // <div className="navbar">
    //   { pokemonIndex > 0 ? <button className='navbuttons' onClick={handleClickPrevious}>Previous</button> : <button className='navbuttons'>Previous</button>}
    //   { pokemonIndex < pokemonList - 1 ? <button className='navbuttons' onClick={handleClickNext}>Next</button> : <button className='navbuttons'>Next</button>}
    // </div>


  )
}

export default NavBar;