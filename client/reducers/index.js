import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import input from './input';
import pokemon from './pokemon';

const rootReducer = combineReducers({
  pokemon,
  routing: routerReducer // so you can use time travel features easily with redux/react-router
});

export default rootReducer;
