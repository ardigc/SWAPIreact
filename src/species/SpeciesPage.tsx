import { useParams } from "react-router-dom";
import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import { species } from "./Species.tsx";
import Bigspecie from "./BigSpecie.tsx";

export default function SpeciesPage() {
  const [loading, setLoading] = useState(false);
  const [species, setSpecies] = useState<species>({
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
  });
  const params = useParams();
  const id = params.personId;
  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/species/" + id)
      .then((res) => res.json())
      .then((body) => {
        setSpecies(body);
        setLoading(false);
      });
  }, []);

  return (
    <div className="color-back">
      <Header />
      <div className="grid-big top-margin">
        {loading && <div className="loading" />}

        {!loading && <Bigspecie {...species} />}
      </div>
    </div>
  );
}
