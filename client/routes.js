import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PokemonContainer from './containers/PokemonContainer';

const routes = (

  <Router history={browserHistory}>
    <Route path="/" component={PokemonContainer}>
      <IndexRoute></IndexRoute>
    </Route>
  </Router>
)
