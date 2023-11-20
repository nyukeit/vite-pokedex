import './cards.css';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const PokemonCard = () => {
  let pokemon = pokemonList[1]; // 0 for Bulbasaur, 1 for Mew

  return (
    <figure className="card">
      {
        pokemon.imgSrc ? <img className='cardImg' src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p> // Display image if Bulbasaur, ??? if mew
      }
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  )
}

export default PokemonCard;