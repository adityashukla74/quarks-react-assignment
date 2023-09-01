import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  TextField
} from '@mui/material';
import CircularWithValueLabel from './Spinner';

function TableComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetch('https://api.npoint.io/8d0109c35278f342992a', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000', 
      },
      mode: 'cors',
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

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    const { key, direction } = sortConfig;
    if (key) {
      return [...data].sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];
        if (direction === 'asc') {
          return aValue < bValue ? -1 : 1;
        } else {
          return aValue > bValue ? -1 : 1;
        }
      });
    }
    return data;
  };

  const handleFilterChange = (e) => { // Step 4: Event handler for filter input
    setFilterText(e.target.value);
  };

  const filteredData = sortedData().filter((row) => {
    // Check if any cell in the row contains the filter text (case-insensitive)
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  const renderTableHeader = () => (
    <TableRow>
      {tableHeaders.map((header) => (
        <TableCell
          key={header}
          onClick={() => requestSort(header)}
          style={{ cursor: 'pointer' }}
        >
          {header}
        </TableCell>
      ))}
    </TableRow>
  );

  const renderTableRows = () => (
    filteredData.map((row) => (
      <TableRow key={row.id}>
        {tableHeaders.map((header) => (
          <TableCell key={header}>{row[header]}</TableCell>
        ))}
      </TableRow>
    ))
  );
  
  if (loading) {
    return <CircularWithValueLabel />;
  }

  return (
    <div>
      <TextField 
        label='filter table'
        variant='outlined'
        value= {filterText}
        onChange={handleFilterChange}
        fullWidth
        style={{marginBottom: '20px'}}
      />
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>{renderTableHeader()}</TableHead>
        <TableBody>{renderTableRows()}</TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}

export default TableComponent;
