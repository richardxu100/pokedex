import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainLayout from '../components/mainLayout';

// specifies how to turn the redux state into container props
function mapStateToProps(state) {
  const { pokemon, searchText, caughtPokemon, open } = state;

  const filteredPokemon = pokemon.filter(poke => {
    return poke.name.toLowerCase().includes(searchText.toLowerCase())
  })

  console.log('Caught pokemon', caughtPokemon);
  console.log('Caught names', caughtNames);
  console.log('Caught Pokemon length', caughtPokemon.length);

  let caughtNames;
  if (caughtPokemon[caughtPokemon.length - 1] === 'all') {
    caughtNames = pokemon.map((poke) => poke.name)
  }
  else if (caughtPokemon[caughtPokemon.length - 1] === 'none') {
    caughtNames = [];
  }
  else {
    caughtNames = caughtPokemon.map(rowNumber => {
      if (rowNumber !== 'all' && rowNumber !== 'none') {
        return pokemon[rowNumber].name
      }
    })
  }

  return searchText === '' ?
    {
      pokemon,
      searchText,
      caughtPokemon: caughtNames,
      open
    } :
    {
      pokemon: filteredPokemon,
      searchText,
      caughtPokemon: caughtNames,
      open
    }
}

// only do this once, instead of multiple times to different containers
function mapDispatchToProps(dispatch) { // allows actionCreators to dispatch events
  return bindActionCreators(actionCreators, dispatch);
}

// Creates a new `Wrapper Layout` that has the state and action creators for the container components
const App = connect(mapStateToProps, mapDispatchToProps)(MainLayout);

export default App;
