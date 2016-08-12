export function changeInput(searchText) {
  return {
    type: 'CHANGE_INPUT',
    searchText
  };
}

export function catchPokemon(rowNumbers) {
  return {
    type: 'CATCH_POKEMON',
    rowNumbers // the plural of rowNumber because the data comes in as an array
  }
}
