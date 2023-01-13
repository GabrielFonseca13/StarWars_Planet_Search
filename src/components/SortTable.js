import React from 'react';
// import StarWarsContext from '../context/StarWarsContext';

export default function SortTable() {
  return (
    <>
      <div>
        Ordenar
      </div>
      <div>
        <label htmlFor="ASC">
          <input type="radio" name="ASC" id="ASC" />
          ASCENDENTE
        </label>
        <label htmlFor="DESC">
          <input type="radio" name="DESC" id="DESC" />
          DESCENDENTE
        </label>
      </div>
    </>
  );
}
