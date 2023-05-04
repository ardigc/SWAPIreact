// import { useEffect, useState } from "react";
import { People } from "./App.tsx";
export default function Person(props: People) {
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
    url,
  } = props;
  //   const [loading, setLoading] = useState(false);
  console.log(props);
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
  function clickHandler() {
    const ident = url;
    var regex = /(\d+)/g;
    const ide = ident.match(regex);
    window.location.assign(window.location.href + "?id=" + ide);
    return;
  }
  return (
    <button className="grid-person" onClick={() => clickHandler()}>
      <div className="name-box">{name}</div>
      <div className="item-box">Height: {height}</div>
      <div className="item-box">Birth year: {birth_year}</div>
      <div className="item-box">Eye color: {eye_color}</div>
      <div className="item-box">Gender: {gender}</div>
      <div className="item-box">Mass: {mass}</div>
      {/* <div>Fims: {films}</div> */}
      <div className="item-box">Hair color: {hair_color}</div>
      {/* <div className="item-box">Homeworld: {homeworld}</div> */}
      {/* {loading && <div className="loading" />} */}
      <div className="item-box">Skin color: {skin_color}</div>
    </button>
  );
}
