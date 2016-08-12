import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PokemonTable from '../components/pokemonTable';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import styles from '../styles/styles';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class PokemonContainer extends Component {

  handleChange = (e) => {
    e.preventDefault();
    this.props.changeInput(e.target.value);
  }

  handleRowClick = (rowNumber) => { // amazing, material-ui gives you the prop of the row
    // e.stopPropagation();
    // console.log('handle row click works');
    // console.log('rowNumber is', rowNumber);
    this.props.catchPokemon(rowNumber);
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
        <PokemonTable
          pokemon={this.props.pokemon}
          onRowClick={this.handleRowClick}
          />
        <Drawer open={this.props.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </Grid>
    )
  }
}
