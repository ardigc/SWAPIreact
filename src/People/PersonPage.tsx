import { useParams } from "react-router-dom";
import "../styles.css";
import { useEffect, useState } from "react";
import BigPerson from "./BigPerson.tsx";
import { Header } from "../header.tsx";
import { People } from "./People.tsx";

export default function PersonPage() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState<People>({
    homeworld: "",
    starships: [],
    species: [],
    vehicles: [],
    mass: "",
    skin_color: "",
    url: "",
    name: "",
    height: "",
    birth_year: "",
    eye_color: "",
    gender: "",
    films: [],
    hair_color: "",
  });
  const params = useParams();
  const id = params.personId;
  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/people/" + id)
      .then((res) => res.json())
      .then((body) => {
        setPerson(body);
        setLoading(false);
      });
  }, []);
  console.log(person);

  // console.log(person.homeworld);
  return (
    <div className="color-back">
      <Header />
      <div className="grid-big top-margin">
        {loading && <div className="loading" />}

        {!loading && <BigPerson {...person} />}
        {/* {loading && <div className="loading" />}

        <BigPerson {...person} /> */}
      </div>
    </div>
  );
}
