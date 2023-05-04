import { useParams } from "react-router-dom";

export default function PersonPage() {
  const params = useParams();
  const personId = params.personId;
  return <div>{personId}</div>;
}
