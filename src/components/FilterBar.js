import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function FilterBar() {
  const [columnValue, setColumnValue] = useState('population');
  const [operatorValue, setOperatorValue] = useState('maior que');
  const [numberValue, setNumberValue] = useState(0);

  const {
    planetsList,
    setPlanetsList,
  } = useContext(StarWarsContext);

  const filterHandleClick = () => {
    if (operatorValue === 'maior que') {
      const filterBiggerThan = planetsList
        .filter((planet) => planet[columnValue] !== 'unknown'
          && (Number(planet[columnValue]) > Number(numberValue)));
      setPlanetsList(filterBiggerThan);
    } else if (operatorValue === 'menor que') {
      const filtersmallerThan = planetsList
        .filter((planet) => planet[columnValue] !== 'unknown'
          && (Number(planet[columnValue]) < Number(numberValue)));
      setPlanetsList(filtersmallerThan);
    } else if (operatorValue === 'igual a') {
      const EqualsTo = planetsList
        .filter((planet) => planet[columnValue] !== 'unknown'
          && (Number(planet[columnValue]) === Number(numberValue)));
      setPlanetsList(EqualsTo);
    }
  };

  return (
    <div>
      <label htmlFor="tag-column">
        Coluna
        <select
          name="tag-column"
          id="tag-column"
          data-testid="column-filter"
          onChange={ (event) => setColumnValue(event.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="operator">
        Operador
        <select
          name="operator"
          id="operator"
          data-testid="comparison-filter"
          onChange={ (event) => setOperatorValue(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="valor">
        Valor:
        <input
          type="number"
          name="valor"
          id="valor"
          data-testid="value-filter"
          value={ numberValue }
          onChange={ (event) => setNumberValue(event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterHandleClick }
      >
        FILTRAR
      </button>
    </div>
  );
}
