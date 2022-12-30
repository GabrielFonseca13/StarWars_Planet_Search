import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);

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
  };

  const context = {
    planetsList,
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
