import './App.css';
import Navbar from './Components/Navbar';
import TableComponent from './Components/Table';
import StatusBadge from './Components/badge';
import ChartComponent from './Components/Charts';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header style={{ marginBottom: '4%' }}> Create a Basic Table Component</header>
        <TableComponent />
        <header style={{ marginBottom: '4%', marginTop: '2%' }}>Task 1 : Create a Status Badge Component</header>
        <StatusBadge />
        <header style={{ marginBottom: '4%', marginTop: '2%' }}>Task 2 : Basic data visualization</header>
        <ChartComponent />
      </div>

    </>
  );
}

export default App;
