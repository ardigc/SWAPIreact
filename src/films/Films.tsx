import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import Film from "./Film.tsx";
export interface Filmed {
  characters: Array<string>;
  director: string;
  episode_id: number;
  opening_crawl: string;
  planets: Array<string>;
  producer: string;
  release_date: string;
  species: Array<string>;
  starships: Array<string>;
  title: string;
  url: string;
  vehicles: Array<string>;
}

export default function Films() {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState<Filmed[]>([
    {
      characters: [],
      director: "",
      episode_id: 0,
      opening_crawl: "",
      planets: [],
      producer: "",
      release_date: "",
      species: [],
      starships: [],
      title: "",
      url: "",
      vehicles: [],
    },
  ]);
  // const search = new URLSearchParams(window.location.search);
  // const id = search.get("id");
  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((body) => {
        setFilms(body.results);
        setLoading(false);
      });
  }, []);
  console.log(films);

  return (
    <div className="color-back">
      <Header />
      <div className="grid top-margin">
        {loading && <div className="loading" />}

        {!loading && films.map((detail) => <Film {...detail} />)}
      </div>
    </div>
  );
}
