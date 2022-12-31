import React from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

function App() {
  return (
    <>
      <h1>Star Wars</h1>
      <SearchBar />
      <FilterBar />
      <Table />
    </>
  );
}

export default App;
