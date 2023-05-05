import { useParams } from "react-router-dom";
import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import { Ships } from "./StarShips.tsx";
import BigShip from "./BigShip.tsx";
import { Intro } from "../Intro.tsx";

export default function ShipPage() {
  const [loading, setLoading] = useState(false);
  const [ship, setShip] = useState<Ships>({
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
    setLoading(true);
    fetch("https://swapi.dev/api/starships/" + id)
      .then((res) => res.json())
      .then((body) => {
        setShip(body);
        setLoading(false);
      });
  }, []);

  console.log(ship);
  return (
    <div className="color-back">
      <Header />
      <div className="top-margin">
        <Intro />
        <div className="grid-big">
          {loading && <div className="loading" />}

          {!loading && <BigShip {...ship} />}
        </div>
      </div>
    </div>
  );
}
