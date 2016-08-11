import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

export default class PokemonContainer extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={3}>Hello, world!</Col>
          <Col xs={6} md={3}>Hello, world!</Col>
        </Row>
      </Grid>
    )
  }
}
