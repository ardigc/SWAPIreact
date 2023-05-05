import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import Spec from "./Specie.tsx";
export interface species {
  average_height: string;
  average_lifespan: string;
  classification: string;
  designation: string;
  eye_colors: string;
  films: Array<string>;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: Array<string>;

  url: "https://swapi.dev/api/species/1/";
}

export default function Species() {
  const [loading, setLoading] = useState(false);
  const [species, setspecies] = useState<species[]>([
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

  // const search = new URLSearchParams(window.location.search);
  // const id = search.get("id");

  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese species
    fetch("https://swapi.dev/api/species/")
      .then((res) => res.json())
      .then((body) => {
        setspecies(body.results);
        setLoading(false);
      });
  }, []);
  console.log(species);
  return (
    <div>
      <Header />
      {loading && <div className="loading" />}

      <div className="grid top-margin">
        {species.map((detail) => (
          <Spec {...detail} />
        ))}
      </div>
    </div>
  );
}
