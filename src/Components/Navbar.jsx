import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Navbar() {
  const navbarStyle = {
    background: 'black',
    marginBottom: '2%'
  };

  const quarksNavbar = {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
  };

  return (
    <AppBar position="static" style={navbarStyle}>
      <Toolbar>
        <Typography variant="h6" style={quarksNavbar}>
          Quarks Assignment
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;