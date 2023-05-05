// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { People } from "./People.tsx";
export default function Person(props: People) {
  let {
    name,
    height,
    birth_year,
    eye_color,
    gender,
    hair_color,
    mass,
    skin_color,
    url,
  } = props;
  const navigate = useNavigate();

  function clickHandler() {
    const ident = url;
    var regex = /(\d+)/g;
    const id = ident.match(regex);
    navigate("/people/" + id);
    // window.location.assign(window.location.href + "?id=" + ide);
    return;
  }
  return (
    <button
      className="grid-persons bg-gray-700 hover:bg-gray-800"
      onClick={() => clickHandler()}
    >
      <div className="name-box">{name}</div>
      <div className="item-box">Height: {height}</div>
      <div className="item-box">Birth year: {birth_year}</div>
      <div className="item-box">Eye color: {eye_color}</div>
      <div className="item-box">Gender: {gender}</div>
      <div className="item-box">Mass: {mass}</div>
      <div className="item-box">Hair color: {hair_color}</div>
      <div className="item-box">Skin color: {skin_color}</div>
    </button>
  );
}
