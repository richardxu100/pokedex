function pokemon(state=[], action) { // this dispatch function needs switch stuff in it for the data to show for some reason
  switch (action.type) {
    case 'FILTER_POKEMON':
      console.log('Filtering Pokemon');
      return state;
    default:
      return state;
  }
}

export default pokemon;
