import "./styles.css";
import { useEffect, useState } from "react";

interface People {
  name: string;
  height: string;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState<People[]>([{ name: "", height: "" }]);

  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((body) => {
        setPerson(body.results);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p>{person[0].name}</p>
      {loading && <div className="loading" />}
    </div>
  );
}
