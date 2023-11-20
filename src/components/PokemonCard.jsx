import './cards.css';

const PokemonCard = ({ pokemon }) => {
  // console.log({name, imgSrc});
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