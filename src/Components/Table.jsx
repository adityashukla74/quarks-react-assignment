import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';
import data from '../data.json';

function TableComponent() {
  const tableHeaders = Object.keys(data[0]);

  // table header here ->
  const renderTableHeader = () => (
    <TableRow>
      {tableHeaders.map((header) => (
        <TableCell key={header}>{header}</TableCell>
      ))}
    </TableRow>
  );

  // table rows here ->  
  const renderTableRows = () => (
    data.map((row) => (
      <TableRow key={row.id}>
        {tableHeaders.map((header) => (
          <TableCell key={header}>{row[header]}</TableCell>
        ))}
      </TableRow>
    ))
  );
  
  // rendering table from here ->
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>{renderTableHeader()}</TableHead>
        <TableBody>{renderTableRows()}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
