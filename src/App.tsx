import "./styles.css";
import { useEffect, useState } from "react";
import Person from "./Person.tsx";

export interface People {
  name: string;
  height: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  films: Array<string>;
  hair_color: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  url: string;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [persons, setPersons] = useState<People[]>([
    {
      homeworld: "",
      starships: [],
      species: [],
      vehicles: [],
      mass: "",
      skin_color: "",
      url: "",
      name: "",
      height: "",
      birth_year: "",
      eye_color: "",
      gender: "",
      films: [],
      hair_color: "",
    },
  ]);

  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((body) => {
        setPersons(body.results);
        setLoading(false);
      });
  }, []);
  // const gridpersons = document.querySelector(".grid-persons")
  // const person = persons.map(createperson)
  // gridpersons.append(...persons)
  if (false) {
    return <div>// La caja grande correspondiente al ID</div>;
  } else {
    return (
      <div>
        <div className="grid">
          {persons.map((detail) => (
            <Person {...detail} />
          ))}
        </div>
        {loading && <div className="loading" />}
      </div>
    );
  }
}
