import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import pokemon from './pokemon';
import searchText from './searchText';

const rootReducer = combineReducers({
  pokemon,
  searchText, // where the
  caughtPokemon: pokemon,
  routing: routerReducer // so you can use time travel features easily with redux/react-router
});

export default rootReducer;
