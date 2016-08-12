import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainLayout from '../components/mainLayout';

function mapStateToProps(state) {
  const { pokemon, searchText, caughtPokemon } = state;

  const filteredPokemon = pokemon.filter(poke => {
    return poke.name.toLowerCase().includes(searchText.toLowerCase())
  })

  const caughtNames = caughtPokemon.map(rowNumber => {
    return pokemon[rowNumber].name;
  })

  console.log('Caught pokemon', caughtPokemon);
  console.log('Caught names', caughtNames);

  return searchText === '' ?
    {
      pokemon,
      searchText,
      caughtPokemon: caughtNames
    } :
    {
      pokemon: filteredPokemon,
      searchText,
      caughtPokemon: caughtNames
    }
}

function mapDispatchToProps(dispatch) { // allows actionCreators to dispatch events
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainLayout);

export default App;
