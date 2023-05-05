import "../styles.css";
import { useEffect, useState } from "react";
import Person from "./Person.tsx";
import { Header } from "../header.tsx";
export interface Planets {
  name: string;
  climate: string;
  diameter: string;
  films: Array<string>;
  gravity: string;
  orbital_period: string;
  population: string;
  residents: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export default function Planets() {
  const [loading, setLoading] = useState(false);
  const [planets, setPlanets] = useState<Planets[]>([
    {
      name: "",
      climate: "",
      diameter: "",
      films: [],
      gravity: "",
      orbital_period: "",
      population: "",
      residents: "",
      rotation_period: "",
      surface_water: "",
      terrain: "",
      url: "",
    },
  ]);
  console.log(planets);

  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((body) => {
        setPlanets(body.results);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      {loading && <div className="loading" />}

      <div className="grid top-margin">
        {planets.map((detail) => (
          <Person {...detail} />
        ))}
      </div>
    </div>
  );
}
