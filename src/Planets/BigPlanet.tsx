// import { useEffect, useState } from "react";
import { Planets } from "./Planets.tsx";
import NameInt from "../NameInt.tsx";
export default function BigPlanet(props: Planets) {
  let {
    name,
    climate,
    diameter,
    films,
    gravity,
    orbital_period,
    population,
    residents,
    rotation_period,
    surface_water,
    terrain,
  } = props;
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     // hay id? si hay id, busca ese people
  //     fetch("https://swapi.dev/api/people/")
  //       .then((res) => res.json())
  //       .then((body) => {
  //         setPersons(body.results);
  //         setLoading(false);
  //       });
  //   }, []);

  // films.map((film) => console.log(film));
  return (
    <div className="grid-person-big">
      <div className="name-box">{name}</div>
      <div className="item-box">Climate: {climate}</div>
      <div className="item-box">Diameter: {diameter}</div>
      <div className="item-box">Gravity: {gravity}</div>
      <div className="item-box">Orbital period: {orbital_period}</div>
      <div className="item-box">Population: {population}</div>
      <div className="item-box">Rotation period: {rotation_period}</div>
      <div className="item-box">Surface water: {surface_water}</div>
      <div className="item-box">Terrain: {terrain}</div>
      <div className="item-box">
        Fims:{" "}
        {films.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="item-box">
        Residents:{" "}
        {residents.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
    </div>
  );
}
