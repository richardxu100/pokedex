function pokemon(state=[], action) { // this dispatch function needs switch stuff in it for the data to show for some reason
  switch (action.type) {
    case 'FILTER_POKEMON':
      const newPokemon = state.filter((poke) => {
        return poke.name.includes(action.name);
      });
      console.log(newPokemon);
      return action.name === '' ? [ ...state ] : newPokemon;
    default:
      return state;
  }
}

export default pokemon;
