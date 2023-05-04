import "./styles.css";
import { useEffect, useState } from "react";
import Person from "./Person.tsx";
import BigPerson from "./BigPerson.tsx";

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

export default function App() {
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
  const [person, setPerson] = useState<People>({
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
  });
  const search = new URLSearchParams(window.location.search);
  const id = search.get("id");

  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    if (id === null) {
      fetch("https://swapi.dev/api/people/")
        .then((res) => res.json())
        .then((body) => {
          setPersons(body.results);
          setLoading(false);
        });
    } else {
      fetch("https://swapi.dev/api/people/" + id)
        .then((res) => res.json())
        .then((body) => {
          setPerson(body);
          setLoading(false);
        });
    }
  }, []);

  if (id !== null) {
    return (
      <div className="relative flex flex-row items-center">
        <BigPerson {...person} />
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 ">
        {persons.map((detail) => (
          <Person {...detail} />
        ))}
        {loading && <div className="loading" />}
      </div>
    );
  }
}
