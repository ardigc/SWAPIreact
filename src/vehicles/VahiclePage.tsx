import { useParams } from "react-router-dom";
import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import { Vehicled } from "./Vehicles.tsx";
import BigVehicle from "./BigVehicle.tsx";

export default function VehiclePage() {
  const [loading, setLoading] = useState(false);
  const [vehicle, setVehicle] = useState<Vehicled>({
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
  });
  const params = useParams();
  const id = params.personId;
  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/" + id)
      .then((res) => res.json())
      .then((body) => {
        setVehicle(body);
        setLoading(false);
      });
  }, []);

  console.log(vehicle);
  return (
    <div>
      <Header />
      {loading && <div className="loading" />}

      <div className="grid-big top-margin">
        <BigVehicle {...vehicle} />
      </div>
    </div>
  );
}
