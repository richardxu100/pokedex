import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PokemonContainer from './containers/PokemonContainer';
import MainLayout from './components/mainLayout';
import './styles/style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const routes = (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={PokemonContainer}/>
      </Route>
    </Router>
  </MuiThemeProvider>
)

export default routes;
