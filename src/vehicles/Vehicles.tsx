import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import Vehicle from "./Vehicle.tsx";
export interface Vehicled {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  films: Array<string>;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: Array<string>;
  url: string;
  vehicle_class: string;
}

export default function Vehicles() {
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicled[]>([
    {
      cargo_capacity: "",
      consumables: "",
      cost_in_credits: "",
      crew: "",
      films: [],
      length: "",
      manufacturer: "",
      max_atmosphering_speed: "",
      model: "",
      name: "",
      passengers: "",
      pilots: [],
      url: "",
      vehicle_class: "",
    },
  ]);
  // const search = new URLSearchParams(window.location.search);
  // const id = search.get("id");
  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    fetch("https://swapi.dev/api/vehicles/")
      .then((res) => res.json())
      .then((body) => {
        setVehicles(body.results);
        setLoading(false);
      });
  }, []);
  console.log(vehicles);

  return (
    <div>
      <Header />
      {loading && <div className="loading" />}

      <div className="grid top-margin">
        {vehicles.map((detail) => (
          <Vehicle {...detail} />
        ))}
      </div>
    </div>
  );
}
