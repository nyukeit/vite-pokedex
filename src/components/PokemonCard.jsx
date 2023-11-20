import './cards.css';

const PokemonCard = ({name, imgSrc}) => {
  // console.log({name, imgSrc});
  return (
    <figure className="card">
      {
        imgSrc ? <img className='cardImg' src={imgSrc} alt={name}/> : <p>???</p> // Display image if Bulbasaur, ??? if mew
      }
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export default PokemonCard;