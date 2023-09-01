import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import TableComponent from './Components/Table';
import StatusBadge from './Components/badge';
import ChartComponent from './Components/Charts';
import Form from "./Components/Form";
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header style={{ marginBottom: '4%', fontWeight: 'bold' }}> Create a Basic Table Component</header>
        <TableComponent />
        <header style={{ marginBottom: '2%', marginTop: '2%', fontWeight: 'bold' }}>Task 1 : Create a Status Badge Component</header>
        <StatusBadge />
        <header style={{ marginBottom: '4%', marginTop: '2%', fontWeight: 'bold' }}>Task 2 : Basic data visualization</header>
        <ChartComponent />
        <header style={{ marginBottom: '4%', marginTop: '2%', fontWeight: 'bold' }}>Task 3 : Create Accesible Form With Validations</header>
        <Form />
      </div>
    <Footer/>
    </>
  );
}

export default App;
