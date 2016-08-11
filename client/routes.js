import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App'; // App replaces MainLayout b/c it needs to connect it with props and dispatch events
import PokemonContainer from './containers/PokemonContainer';
import './styles/styles.sass';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Provider } from 'react-redux'; // if you get a console.error() is not a function, checkout the imports
import store, { history } from './store';

const routes = (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={PokemonContainer}/>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
)

export default routes;
