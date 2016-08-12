import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainLayout from '../components/mainLayout';

function mapStateToProps(state) {
  const { pokemon, searchText } = state;
  if (searchText === '') {
    return {
      pokemon,
      searchText
    }
  }
  else {
    const filteredPokemon = pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return {
      pokemon: filteredPokemon,
      searchText
    }
  }
    // pokemon: state.pokemon, // maybe in the future remove the input reducer
    // searchText: state.searchText // make sure to map state to props or the mainLayout won't have the prop ahhh!
}

function mapDispatchToProps(dispatch) { // allows actionCreators to dispatch events
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainLayout);

export default App;
