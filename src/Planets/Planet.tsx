// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Planets } from "./Planets.tsx";
export default function Planet(props: Planets) {
  let {
    name,
    climate,
    diameter,
    gravity,
    orbital_period,
    population,
    rotation_period,
    surface_water,
    terrain,
    url,
  } = props;
  const navigate = useNavigate();

  function clickHandler() {
    const ident = url;
    var regex = /(\d+)/g;
    const id = ident.match(regex);
    navigate("/planets/" + id);
    // window.location.assign(window.location.href + "?id=" + ide);
    return;
  }
  return (
    <button
      className="grid-persons bg-gray-700 hover:bg-gray-800"
      onClick={() => clickHandler()}
    >
      <div className="name-box">{name}</div>
      <div className="item-box">Climate: {climate}</div>
      <div className="item-box">Diameter: {diameter}</div>
      <div className="item-box">Gravity: {gravity}</div>
      <div className="item-box">Orbital period: {orbital_period}</div>
      <div className="item-box">Population: {population}</div>
      {/* <div className="item-box">Residents: {residents}</div> */}
      <div className="item-box">Rotation period: {rotation_period}</div>
      <div className="item-box">Surface water: {surface_water}</div>
      <div className="item-box">Terrain: {terrain}</div>
    </button>
  );
}
