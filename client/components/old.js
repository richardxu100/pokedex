import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const PokemonTable = ({ pokemon }) => {
  return (
    <Table multiSelectable={true}>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Type</TableHeaderColumn>
          <TableHeaderColumn>Stage</TableHeaderColumn>
          <TableHeaderColumn>Species</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody stripedRows={true}>
        {pokemon.map((poke, i) => {
          const { name, species, stage, type } = poke;
          return (
            <TableRow key={i} i={i}>
              <TableRowColumn>{name}</TableRowColumn>
              <TableRowColumn>{type}</TableRowColumn>
              <TableRowColumn>{stage}</TableRowColumn>
              <TableRowColumn>{species}</TableRowColumn>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default PokemonTable;
