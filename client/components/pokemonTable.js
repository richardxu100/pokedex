import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const PokemonTable = (props) => {
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
        <TableRow>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>John Smith</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default PokemonTable;
