function pokemon(state = [], action) { // this dispatch function needs switch stuff in it for the data to show for some reason
  switch (action.type) {
    case 'CATCH_POKEMON':
      console.log(state);
      return state;
    default:
      return state;
  }
}

const filterPokemon = (pokemon, searchText) => {
  return pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(searchText.toLowerCase())
    })
}

export default pokemon;
