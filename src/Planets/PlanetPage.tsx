import { useParams } from "react-router-dom";
import "../styles.css";
import { useEffect, useState } from "react";
import { Header } from "../header.tsx";
import { Planets } from "./Planets.tsx";
import BigPlanet from "./BigPlanet.tsx";

export default function PlanetPage() {
  const [loading, setLoading] = useState(false);
  const [planet, setPlanet] = useState<Planets>({
    name: "",
    climate: "",
    diameter: "",
    films: [],
    gravity: "",
    orbital_period: "",
    population: "",
    residents: [],
    rotation_period: "",
    surface_water: "",
    terrain: "",
    url: "",
  });
  const params = useParams();
  const id = params.personId;
  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + id)
      .then((res) => res.json())
      .then((body) => {
        setPlanet(body);
        setLoading(false);
      });
  }, []);

  // console.log(person.homeworld);
  return (
    <div>
      <Header />
      {loading && <div className="loading" />}

      <div className="grid-big top-margin">
        <BigPlanet {...planet} />
      </div>
    </div>
  );
}
