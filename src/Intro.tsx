import { Link } from "react-router-dom";

export function Intro(props) {
  const path = window.location.pathname;
  const newPath = path.slice(0, path.lastIndexOf("/"));
  return (
    <div className="intro">
      <Link to={newPath}>{props.title}</Link>
    </div>
  );
}
