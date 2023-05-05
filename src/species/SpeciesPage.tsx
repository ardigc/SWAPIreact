import { useParams } from "react-router-dom";
import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import { species } from "./Species.tsx";
import Bigspecie from "./BigSpecie.tsx";

export default function SpeciesPage() {
  const [loading, setLoading] = useState(false);
  const [species, setSpecies] = useState<species>({
    MGLT: "",
    cargo_capacity: "",
    consumables: "",
    cost_in_credits: "",
    crew: "",
    films: [],
    hyperdrive_rating: "",
    length: "",
    manufacturer: "",
    max_atmosphering_speed: "",
    model: "",
    name: "",
    passengers: "",
    pilots: [],
    url: "",
    starship_class: "",
  });
  const params = useParams();
  const id = params.personId;
  useEffect(() => {
    fetch("https://swapi.dev/api/species/" + id)
      .then((res) => res.json())
      .then((body) => {
        setSpecies(body);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      {loading && <div className="loading" />}

      <div className="grid-big top-margin">
        <Bigspecie {...species} />
      </div>
    </div>
  );
}
