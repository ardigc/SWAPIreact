import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState<{ name: string }>({ name: "" });

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then((res) => res.json())
      .then((body) => setPerson(body));
  }, []);

  return (
    <div>
      <p>{person.name}</p>
      {loading && <p>Loading...</p>}
    </div>
  );
}
