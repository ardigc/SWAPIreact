// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ships } from "./StarShips.tsx";
export default function Ship(props: Ships) {
  let {
    MGLT,
    cargo_capacity,
    consumables,
    cost_in_credits,
    crew,
    hyperdrive_rating,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    name,
    passengers,
    url,
    starship_class,
  } = props;
  const navigate = useNavigate();

  function clickHandler() {
    const ident = url;
    var regex = /(\d+)/g;
    const id = ident.match(regex);
    navigate("/starships/" + id);
    // window.location.assign(window.location.href + "?id=" + ide);
    return;
  }
  return (
    <button
      className="grid-persons bg-gray-700 hover:bg-gray-800"
      onClick={() => clickHandler()}
    >
      <div className="name-box">{name}</div>
      <div className="item-box">MGLT: {MGLT}</div>
      <div className="item-box">Model: {model}</div>
      <div className="item-box">Passengers: {passengers}</div>
      <div className="item-box">
        Max atmosphering speed: {max_atmosphering_speed}
      </div>
      <div className="item-box">Cargo capacity: {cargo_capacity}</div>
      <div className="item-box">Consumables: {consumables}</div>
      <div className="item-box">Cost in credits: {cost_in_credits}</div>
      <div className="item-box">Crew: {crew}</div>
      <div className="item-box">Hiperdrive rating: {hyperdrive_rating}</div>
      <div className="item-box">Length: {length}</div>
      <div className="item-box">Manufacturer: {manufacturer}</div>
      <div className="item-box">Starship class: {starship_class}</div>
    </button>
  );
}
