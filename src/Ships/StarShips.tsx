import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import Ship from "./Ship.tsx";
export interface Ships {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  films: Array<string>;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  url: string;
  passengers: string;
  pilots: Array<string>;
  starship_class: string;
}

export default function StarShips() {
  const [loading, setLoading] = useState(false);
  const [ships, setShips] = useState<Ships[]>([
    {
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
    },
  ]);
  console.log(ships);
  // const search = new URLSearchParams(window.location.search);
  // const id = search.get("id");

  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    fetch("https://swapi.dev/api/starships/")
      .then((res) => res.json())
      .then((body) => {
        setShips(body.results);
        setLoading(false);
      });
  }, []);

  return (
    <div className="color-back">
      <Header />

      <div className="grid top-margin">
        {loading && <div className="loading" />}
        {!loading && ships.map((detail) => <Ship {...detail} />)}
      </div>
    </div>
  );
}
