import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import Spec from "./Specie.tsx";
import { Intro } from "../Intro.tsx";
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
  url: string;
}

export default function Species() {
  const [loading, setLoading] = useState(false);
  const [species, setspecies] = useState<species[]>([
    {
      average_height: "",
      average_lifespan: "",
      classification: "",
      designation: "",
      eye_colors: "",
      films: [],
      hair_colors: "",
      homeworld: "",
      language: "",
      name: "",
      people: [],
      url: "",
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
    <div className="color-back">
      <Header />
      <div className="top-margin">
        <Intro />
        <div className="grid">
          {loading && <div className="loading" />}

          {!loading && species.map((detail) => <Spec {...detail} />)}
        </div>
      </div>
    </div>
  );
}
