function drawer(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      console.log('state of the drawer is', state);
      return !state;
    default:
      return state;
  }
}

export default drawer;
