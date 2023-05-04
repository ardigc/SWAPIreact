import { useNavigate } from "react-router-dom";
import gente from "./images/gente.jpg";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3">
      <button onClick={() => navigate("/people")}>
        People
        <img src={gente} />
      </button>
      <button onClick={() => navigate("/starships")}>Starships</button>
      <button onClick={() => navigate("/planets")}>Planets</button>
      <button onClick={() => navigate("/species")}>Species</button>
      <button onClick={() => navigate("/vehicles")}>Vehicles</button>
      <button onClick={() => navigate("/films")}>Films</button>
    </div>
  );
}
