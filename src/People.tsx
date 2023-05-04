import "./styles.css";
import { useEffect, useState } from "react";
import Person from "./Person.tsx";
import { Header } from "./header.tsx";
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
  species: string;
  starships: Array<string>;
  vehicles: Array<string>;
  url: string;
}

export default function People() {
  const [loading, setLoading] = useState(false);
  const [persons, setPersons] = useState<People[]>([
    {
      homeworld: "",
      starships: [],
      species: "",
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

  // const search = new URLSearchParams(window.location.search);
  // const id = search.get("id");

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

  return (
    <div>
      <Header />

      <div className="grid top-margin">
        {persons.map((detail) => (
          <Person {...detail} />
        ))}
        {loading && <div className="loading" />}
      </div>
    </div>
  );
}
