import { useParams } from "react-router-dom";
import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import { Filmed } from "./Films.tsx";
import BigFilm from "./BigFilm.tsx";

export default function FilmsPage() {
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState<Filmed>({
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
  });
  const params = useParams();
  const id = params.personId;
  useEffect(() => {
    setLoading(true);

    fetch("https://swapi.dev/api/films/" + id)
      .then((res) => res.json())
      .then((body) => {
        setFilm(body);
        setLoading(false);
      });
  }, []);

  console.log(film);
  return (
    <div>
      <Header />

      <div className="grid-big top-margin">
        {loading && <div className="loading" />}
        <BigFilm {...film} />
      </div>
    </div>
  );
}
