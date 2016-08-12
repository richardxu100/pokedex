import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PokemonTable from '../components/pokemonTable';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import styles from '../styles/styles';

export default class PokemonContainer extends Component {

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.props.changeInput(e.target.value);
  }

  render() {
    return (
      <Grid style={styles.pokedexContainer}>
        <Row>
          <TextField
            hintText="What pokemon?"
            fullWidth={true}
            onChange={this.handleChange}
            />
        </Row>
        <PokemonTable pokemon={this.props.pokemon}/>
      </Grid>
    )
  }
}
