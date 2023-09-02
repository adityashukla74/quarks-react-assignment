import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Pagination,
} from '@mui/material';
import CircularWithValueLabel from './Spinner';

function TableComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Change this value as needed

  useEffect(() => {
    // items with a 1000 items, not able to duplicate 10k records as browser is crashing!!!!
    fetch('https://api.npoint.io/ddd3b1d5c47816f77e9c', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000', //to allow cross origin for localhost
      },
      mode: 'cors', //removes cors issue
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
 // get keys from first object to create headers
  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  const requestSort = (key) => {
    let direction = 'asc';
    // check if the sorting config has the same key
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    // set new key and direction after changing
    setSortConfig({ key, direction });
  };

  
  const sortedData = () => {
    // take updated key, direction from sorting config obj
    const { key, direction } = sortConfig;
    if (key) {
      // create a shallow copy 
      return [...data].sort((a, b) => {
        // compare value of key in each obj 
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

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredData = sortedData().filter((row) => {
    // Check if any cell in the row contains the filter text (case-insensitive)
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const maxPage = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

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

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // select items for current page only
    return filteredData.slice(startIndex, endIndex).map((row) => (
      <TableRow key={row.id}>
        {tableHeaders.map((header) => (
          <TableCell key={header}>{row[header]}</TableCell>
        ))}
      </TableRow>
    ));
  };

  if (loading) {
    return <CircularWithValueLabel />;
  }

  return (
    <div>
      <TextField
        label="Filter table"
        variant="outlined"
        value={filterText}
        onChange={handleFilterChange}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>{renderTableHeader()}</TableHead>
          <TableBody>{renderTableRows()}</TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          count={maxPage}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
          siblingCount={1}
          boundaryCount={1}
        />
      </div>
    </div>
  );
}

export default TableComponent;
