function caughtPokemon(state = [], action) {
  switch (action.type) {
    case 'CATCH_POKEMON':
      console.log('state in catch_pokemon is', state);
      console.log('action in catch_pokemon is', action);
      return [
        ...state,
        action.rowNumbers
      ];
    default:
      return state;
  }
}

export default caughtPokemon;
