function searchText(state = '', action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      console.log('State is equal to: ', state);
      console.log('Action is equal to: ', action);
      return action.searchText; // set the state of searchText to the searchText
    default:
      return state;
  }
}

export default searchText;
