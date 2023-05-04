import { useNavigate } from "react-router-dom";
import gente from "./images/gente.jpg";
import films from "./images/films.jpg";
import planets from "./images/planets.jpg";
import ships from "./images/ship.jpg";
import species from "./images/species.jpg";
import vehicles from "./images/vehicles.jpg";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3">
      <button onClick={() => navigate("/people")}>
        People
        <img src={gente} />
      </button>
      <button onClick={() => navigate("/starships")}>
        Starships
        <img src={ships} />
      </button>
      <button onClick={() => navigate("/planets")}>
        Planets
        <img src={planets} />
      </button>
      <button onClick={() => navigate("/species")}>
        Species
        <img src={species} />
      </button>
      <button onClick={() => navigate("/vehicles")}>
        Vehicles
        <img src={vehicles} />
      </button>
      <button onClick={() => navigate("/films")}>
        Films
        <img src={films} />
      </button>
    </div>
  );
}
