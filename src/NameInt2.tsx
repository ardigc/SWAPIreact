import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NameInt2(props: { urls: string }) {
  let urls = props.urls;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  if (urls === null) {
    return <div>Null</div>;
  }
  console.log(name);
  const nuevaUrl = urls.substring("https://swapi.dev/api".length);
  useEffect(() => {
    setLoading(true);
    fetch(urls)
      .then((res) => res.json())
      .then((body) => {
        setName(body.name);
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
