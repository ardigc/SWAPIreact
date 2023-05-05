import NameInt from "../NameInt.tsx";
import { Vehicled } from "./Vehicles.tsx";
export default function BigVehicle(props: Vehicled) {
  let {
    cargo_capacity,
    consumables,
    cost_in_credits,
    crew,
    films,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    name,
    passengers,
    pilots,
    vehicle_class,
  } = props;

  return (
    <div className="grid-person-big">
      <div className="name-box">{name}</div>
      <div className="item-box">Cargo capacity: {cargo_capacity}</div>
      <div className="item-box">Consumables: {consumables}</div>
      <div className="item-box">Cost in credits: {cost_in_credits}</div>
      <div className="item-box">Crew: {crew}</div>
      <div className="item-box">Length: {length}</div>
      <div className="item-box">Manufacturer: {manufacturer}</div>
      <div className="item-box">Vehicle class: {vehicle_class}</div>
      <div className="item-box">Model: {model}</div>
      <div className="item-box">Passengers: {passengers}</div>
      <div className="item-box">
        Max atmosphering speed: {max_atmosphering_speed}
      </div>
      <div className="item-box">
        Fims:{" "}
        {films.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
      <div className="item-box">
        Pilots:{" "}
        {pilots.map((urls) => (
          <NameInt urls={urls} />
        ))}
      </div>
    </div>
  );
}
