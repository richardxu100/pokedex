import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainLayout from '../components/mainLayout';

function mapStateToProps(state) {
  const { pokemon, searchText } = state;
  const filteredPokemon = pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(searchText.toLowerCase())
    })
  return searchText === '' ?
    { pokemon, searchText } :
    { pokemon: filteredPokemon, searchText }
}

function mapDispatchToProps(dispatch) { // allows actionCreators to dispatch events
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainLayout);

export default App;
