import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const { searchName, setSearchName } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      onChange={ (event) => setSearchName(event.target.value) }
      value={ searchName }
      data-testid="name-filter"
    />
  );
}
