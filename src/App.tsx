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
    <div className="category-grid">
      <a className="category-box" onClick={() => navigate("/people")}>
        <div className="category-title">People</div>
        <div className="category-image">
          <img
            className="flex items-center content-center justify-center"
            src={gente}
          />
        </div>
      </a>
      <a className="category-box" onClick={() => navigate("/starships")}>
        <div className="category-title">Starships</div>
        <div className="category-image">
          <img src={ships} />
        </div>
      </a>
      <a className="category-box" onClick={() => navigate("/planets")}>
        <div className="category-title">Planets</div>
        <div className="category-image">
          <img src={planets} />
        </div>
      </a>
      <a className="category-box" onClick={() => navigate("/species")}>
        <div className="category-title">Species</div>
        <div className="category-image">
          <img src={species} />
        </div>
      </a>
      <a className="category-box" onClick={() => navigate("/vehicles")}>
        <div className="category-title">Vehicles</div>
        <div className="category-image">
          <img src={vehicles} />
        </div>
      </a>
      <a className="category-box" onClick={() => navigate("/films")}>
        <div className="category-title">Films</div>
        <div className="category-image">
          <img src={films} />
        </div>
      </a>
    </div>
  );
}
