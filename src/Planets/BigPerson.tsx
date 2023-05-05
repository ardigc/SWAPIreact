// import { useEffect, useState } from "react";
import { People } from "./Planets.tsx";
import NameInt from "../NameInt.tsx";
export default function BigPerson(props: People) {
  let {
    name,
    height,
    birth_year,
    eye_color,
    gender,
    films,
    hair_color,
    homeworld,
    mass,
    skin_color,
    species,
    starships,
    vehicles,
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
      <div className="item-box">Height: {height}</div>
      <div className="item-box">Birth year: {birth_year}</div>
      <div className="item-box">Eye color: {eye_color}</div>
      <div className="item-box">Gender: {gender}</div>
      <div className="item-box">Mass: {mass}</div>
      <div className="item-box">
        Fims:{" "}
        {films.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="item-box">
        Homeworld : <NameInt urls={homeworld} />
      </div>
      <div className="item-box">
        Starships:{" "}
        {starships.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="item-box">
        Species:{" "}
        {species.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="item-box">
        Vehicles:{" "}
        {vehicles.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="item-box">Hair color: {hair_color}</div>
      {/* <div className="item-box">Homeworld: {homeworld}</div> */}
      {/* {loading && <div className="loading" />} */}
      <div className="item-box">Skin color: {skin_color}</div>
    </div>
  );
}
