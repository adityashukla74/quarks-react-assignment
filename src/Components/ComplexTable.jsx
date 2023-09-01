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
    fetch(' https://api.npoint.io/ddd3b1d5c47816f77e9c', {
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

    return filteredData.slice(startIndex, endIndex).map((row) => (
      <TableRow key={row.id}>
        {tableHeaders.map((header) => (
          <TableCell key={header}>{row[header]}</TableCell>
        ))}
      </TableRow>
    ));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return <CircularWithValueLabel />;
  }

  return (
    <div>
      <TextField 
        label='Filter table'
        variant='outlined'
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
        <Button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={currentPage === maxPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default TableComponent;
