import { useEffect, useState } from "react";
export default function NameInt(props: { urls: string }) {
  let urls = props.urls;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  console.log(urls);
  useEffect(() => {
    setLoading(true);
    // hay id? si hay id, busca ese people
    fetch(urls)
      .then((res) => res.json())
      .then((body) => {
        console.log(body.name);
        if (body.name === undefined) {
          setName(body.title + "  ");
        } else {
          setName(body.name + "  ");
        }
        setLoading(false);
      });
  }, []);

  return (
    <a>
      {/* {loading && <div className="loading" />} */}
      {name}
    </a>
  );
}
