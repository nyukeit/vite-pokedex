import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {

  return (
  <>
    <div>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  </>
  )
}

export default App;
