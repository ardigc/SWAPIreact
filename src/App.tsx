import "./styles.css";
import { useEffect, useState } from "react";
import Person from "./Person.tsx";

interface People {
  name: string;
  height: string;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [persons, setPersons] = useState<People[]>([{ name: "", height: "" }]);

  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((body) => {
        setPersons(body.results);
        setLoading(false);
      });
  }, []);
  // const gridpersons = document.querySelector(".grid-persons")
  // const person = persons.map(createperson)
  // gridpersons.append(...persons)
  return (
    <div>
      {persons.map((detail) => (
        <Person {...detail} />
      ))}
      {loading && <div className="loading" />}
    </div>
  );
}
