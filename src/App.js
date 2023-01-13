import React from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import SortTable from './components/SortTable';
import Table from './components/Table';

function App() {
  return (
    <>
      <h1>Star Wars</h1>
      <SearchBar />
      <FilterBar />
      <SortTable />
      <Table />
    </>
  );
}

export default App;
