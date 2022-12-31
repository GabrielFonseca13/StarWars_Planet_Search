import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetsList, setPlanetsList] = useState([]);
  const [searchName, setSearchName] = useState('');

  const fetchPlanets = async () => {
    const URL = 'https://swapi.dev/api/planets';
    const promisse = await fetch(URL);
    const response = await promisse.json();
    const allPlanets = response.results;

    // console.log(allPlanets);

    const rightPlanets = allPlanets.map((planet) => {
      delete planet.residents;
      return planet;
    });

    // console.log(rightPlanets);

    setPlanetsList(rightPlanets);
    setData(rightPlanets);
  };

  const searchPlanetByName = planetsList
    .filter((planet) => planet.name.toUpperCase().includes(searchName.toUpperCase()));

  const context = {
    planetsList,
    searchName,
    searchPlanetByName,
    data,
    setSearchName,
    setPlanetsList,
    fetchPlanets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      <div>
        {children}
      </div>
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
