import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function FilterBar() {
  const [columnValue, setColumnValue] = useState('population');
  const [operatorValue, setOperatorValue] = useState('maior que');
  const [numberValue, setNumberValue] = useState(0);
  const [arrayDeFiltros, setArrayDeFiltros] = useState([]);

  const {
    planetsList,
    setPlanetsList,
    arrayDeColunas,
    data,
  } = useContext(StarWarsContext);

  useEffect(() => {
    arrayDeFiltros.forEach((filter) => {
      if (filter.operador === 'maior que') {
        const filterBiggerThan = planetsList
          .filter((planet) => planet[filter.coluna] !== 'unknown'
            && (Number(planet[filter.coluna]) > Number(filter.numero)));
        setPlanetsList(filterBiggerThan);
      } else if (filter.operador === 'menor que') {
        const filtersmallerThan = planetsList
          .filter((planet) => planet[filter.coluna] !== 'unknown'
            && (Number(planet[filter.coluna]) < Number(filter.numero)));
        setPlanetsList(filtersmallerThan);
      } else if (filter.operador === 'igual a') {
        const EqualsTo = planetsList
          .filter((planet) => planet[filter.coluna] !== 'unknown'
            && (Number(planet[filter.coluna]) === Number(filter.numero)));
        setPlanetsList(EqualsTo);
      }
    });
  }, [arrayDeFiltros]);

  // useEffect(() => {
  //   console.log(`array de filtros ${arrayDeFiltros}`);
  //   console.log(`Array De Filtros ${arrayDeFiltros}`);
  // }, [arrayDeFiltros, arrayDeFiltros]);

  const filterHandleClick = () => {
    const objectTest = {
      coluna: columnValue,
      operador: operatorValue,
      numero: numberValue,
    };
    setArrayDeFiltros([...arrayDeFiltros, objectTest]);
  };

  const deleteAllFilter = () => {
    setFiltrosSelecionados([]);
    setPlanetsList(data);
  };

  const filtraOpcoes = (opcao) => !arrayDeFiltros
    .find((filtro) => opcao === filtro.coluna);

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
          {
            arrayDeColunas.filter(filtraOpcoes).map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))
          }
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
      <br />
      <ul>

        {
          arrayDeFiltros.map((selected, index) => (
            <li key={ index }>
              {`${selected.coluna} ${selected.operador} ${selected.numero} `}
              <button type="button">🗑️</button>
            </li>
          ))
        }
        { arrayDeFiltros.length !== 0
          ? (
            <button
              type="button"
              onClick={ deleteAllFilter }
            >
              Limpar todos os filtros
            </button>
          )
          : null}

      </ul>

    </div>
  );
}
