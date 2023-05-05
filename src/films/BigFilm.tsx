import NameInt from "../NameInt.tsx";
import { Filmed } from "./Films.tsx";
export default function BigFilm(props: Filmed) {
  let {
    characters,
    director,
    episode_id,
    opening_crawl,
    planets,
    producer,
    release_date,
    species,
    starships,
    title,
    vehicles,
  } = props;

  return (
    <div className="grid-film-big">
      <div className="name-box">{title}</div>
      <div className="item-box"> Director: {director}</div>
      {/* <div className="item-box">Opening crawl: {opening_crawl}</div> */}
      <div className="item-box">Release date: {release_date}</div>
      <div className="item-box">Episode ID: {episode_id}</div>
      <div className="item-box">Producer: {producer}</div>
      <div className="link-box">
        Characters:{" "}
        {characters.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="link-box">
        Vehicles:{" "}
        {vehicles.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="link-box">
        Vehicles:{" "}
        {vehicles.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="link-box">
        Starships:{" "}
        {starships.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="link-box">
        Species:{" "}
        {species.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="link-box">
        Planets:{" "}
        {planets.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="item-box">Opening crawl: {opening_crawl}</div>
    </div>
  );
}
