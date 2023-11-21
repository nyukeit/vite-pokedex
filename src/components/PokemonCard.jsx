import './cards.css';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
  // console.log({name, imgSrc});
  return (
    <div className='card-display'>
      <figure className="card">
        {
          pokemon.imgSrc ? <img className='cardImg' src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p> // Display image if Bulbasaur, ??? if mew
        }
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  }).isRequired,
}

export default PokemonCard;