import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <Link to={"/"}>Pagina Star Wars API en react</Link>;
    </div>
  );
}
