import React from 'react'
import { useState } from 'react'
import Axios from 'axios';

const Search = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
            name: "", 
            species: "", 
            img: "",
            hp: "",
            atk: "",
            def: "",
            specAtk: "",
            specDef: "",
            speed: "",
  });

  const searchPokemon = () =>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
        setPokemon({
            name: pokemonName, 
            img: response.data.sprites.other.dream_world.front_default,
            hp: response.data.stats[0].base_stat,
            atk: response.data.stats[1].base_stat,
            def: response.data.stats[2].base_stat,
            specAtk: response.data.stats[3].base_stat,
            specDef: response.data.stats[4].base_stat,
            speed: response.data.stats[5].base_stat,
        });
        setPokemonChosen(true);
    })
  }
  return (
    <div className="displaysearch">
    <div className='searchbox'>
        <h1>Pokemon Search:</h1>
        <input type="text" onChange = {(event) => {setPokemonName(event.target.value)}}/>
        <button onClick={searchPokemon}>Search Pokedex</button>
    </div>
    <div className='searchresults'>
      {!pokemonChosen ? (<h1>Please choose a Pokemon</h1> 
      ) : (
      <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} />
      <h3>HP: {pokemon.hp}</h3>
      <h3>Attack: {pokemon.atk}</h3>
      <h3>Defense: {pokemon.def}</h3>
      <h3>Special Attack: {pokemon.specAtk}</h3>
      <h3>Special Defense: {pokemon.specDef}</h3>
      <h3>Speed: {pokemon.speed}</h3>
      </>
      )
      }
    </div>
    </div>
  )
}

export default Search