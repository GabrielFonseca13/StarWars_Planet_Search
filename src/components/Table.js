import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const {
    fetchPlanets,
    planetsList,
    searchName,
    setPlanetsList,
    data,
  } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    setPlanetsList(
      data
        .filter((planet) => planet.name.toUpperCase().includes(searchName.toUpperCase())),
    );
  }, [searchName]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            planetsList.map((planet) => (
              <tr key={ planet.url }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>
                  {planet.films.map((film, index) => (
                    <p key={ index }>{film}</p>
                  ))}

                </td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
