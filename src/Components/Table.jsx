import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
} from '@mui/material';
import CircularWithValueLabel from './Spinner';

function TableComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.npoint.io/8d0109c35278f342992a', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000', 
      },
      mode: 'cors', // This removes cors issue
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  const renderTableHeader = () => (
    <TableRow>
      {tableHeaders.map((header) => (
        <TableCell key={header}>{header}</TableCell>
      ))}
    </TableRow>
  );

  const renderTableRows = () => (
    data.map((row) => (
      <TableRow key={row.id}>
        {tableHeaders.map((header) => (
          <TableCell key={header}>{row[header]}</TableCell>
        ))}
      </TableRow>
    ))
  );

  if (loading) {
    return <CircularWithValueLabel />;;
  }

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
