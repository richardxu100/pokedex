function pokemon(state = [], action) { // this dispatch function needs switch stuff in it for the data to show for some reason
  switch (action.type) {
    // case 'FILTER_POKEMON':
    //   // const filteredPokemon = filterPokemon(state, action.searchText);
    //   // console.log(filteredPokemon);
    //   // return filteredPokemon;
    //   console.log('The state is equal to: ', state);
    //   return {
    //     ...state,
    //     searchText: action.searchText
    //   }
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
