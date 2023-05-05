// import { useEffect, useState } from "react";
import { species } from "./Species.tsx";
import NameInt from "../NameInt.tsx";
export default function Bigspecie(props: species) {
  let {
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    films,
    hair_colors,
    homeworld,
    language,
    name,
    people,
  } = props;
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     // hay id? si hay id, busca ese species
  //     fetch("https://swapi.dev/api/species/")
  //       .then((res) => res.json())
  //       .then((body) => {
  //         setspecies(body.results);
  //         setLoading(false);
  //       });
  //   }, []);

  // films.map((film) => console.log(film));
  console.log(homeworld);
  console.log(films[1]);
  return (
    <div className="grid-person-big">
      <div className="name-box">{name}</div>
      <div className="item-box">Average height: {average_height}</div>
      <div className="item-box">Average lifespan: {average_lifespan}</div>
      <div className="item-box">Clasification: {classification}</div>
      <div className="item-box">Designation: {designation}</div>
      <div className="item-box">Eye colors: {eye_colors}</div>
      <div className="item-box">Hair colors: {hair_colors}</div>
      <div className="item-box">Languaje: {language}</div>
      <div className="item-box">
        Fims:{" "}
        {films.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="item-box">
        Homeworld: <NameInt urls={homeworld} />
      </div>
      <div className="item-box">
        People:{" "}
        {people.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
    </div>
  );
}
