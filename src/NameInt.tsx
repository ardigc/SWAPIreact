import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NameInt(props: { urls: string }) {
  let urls = props.urls;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  // console.log(urls);
  const nuevaUrl = urls.substring("https://swapi.dev/api".length);
  // console.log(nuevaUrl);
  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    fetch(urls)
      .then((res) => res.json())
      .then((body) => {
        if (body.name === undefined) {
          setName(body.title);
        } else {
          setName(body.name);
        }
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Link to={nuevaUrl}>
        {loading && <div className="mini-loading" />}
        {name}
      </Link>
    </div>
  );
}
