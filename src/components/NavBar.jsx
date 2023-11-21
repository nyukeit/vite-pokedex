import './buttons.css';

const NavBar = ({pokemonList, setPokemonIndex}) => {
  return (
    <div className='navbar'>
      <ul>
        {pokemonList.map((poke, index) =>(
          <button className='navbuttons' key={poke.name} onClick={()=>{setPokemonIndex(index);
            poke.name === "pikachu" ? alert("pika pikachu!!!!"):<></>}}>{poke.name}</button>          
        ))}
      </ul>
    </div>
  )
}

export default NavBar;