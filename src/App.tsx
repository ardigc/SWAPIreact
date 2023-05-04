import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState<{ name: string }>({ name: "" });

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/people/1/")
      .then((res) => res.json())
      .then((body) => {
        setPerson(body);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p>{person.name}</p>
      {loading && <div className="loading" />}
    </div>
  );
}
