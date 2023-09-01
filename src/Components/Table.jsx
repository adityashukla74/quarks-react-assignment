import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  {
    id: "0",
    name: "Naruto",
    location: "Konoha",
    health: "Healthy",
    ip: "abcd",
    volume: 1000000000 // in bytes
  },
  {
    id: "1",
    name: "Sasuke",
    location: "Orochimaru Hidden Village",
    health: "Error",
    ip: "abcd",
    volume: 300000000 // in bytes
  },
  // Add more data objects as needed
];

function TableComponent() {
  // Get the keys from the first data object to dynamically generate table headers
  const tableHeaders = Object.keys(data[0]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {tableHeaders.map((header) => (
                <TableCell key={header}>{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
