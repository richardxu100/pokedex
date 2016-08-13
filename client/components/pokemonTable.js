import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

// just giving an unknown prop to tablerow, it's possible but you get an error warning
const PokemonTable = ({ pokemon, onRowClick }) => {
  return (
    <Table
      multiSelectable={true}
      onRowSelection={onRowClick}
      selectable={true}
      >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Type</TableHeaderColumn>
          <TableHeaderColumn>Stage</TableHeaderColumn>
          <TableHeaderColumn>Species</TableHeaderColumn>
        </TableRow>
      </TableHeader>

      <TableBody stripedRows={true}>

        {pokemon && pokemon.map((poke, i) => {
          const { name, species, stage, type } = poke;
          return (
            <TableRow key={i}>
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

PokemonTable.propTypes = { // yay PropTypes work
  pokemon: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired
}

export default PokemonTable;
