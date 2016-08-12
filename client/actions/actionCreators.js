export function changeInput(searchText) {
  return {
    type: 'CHANGE_INPUT',
    searchText
  };
}

export function catchPokemon(index) {
  return {
    type: 'CATCH_POKEMON',
    index
  }
}
