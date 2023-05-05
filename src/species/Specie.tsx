// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { species } from "./Species.tsx";
export default function Spec(props: species) {
  let {
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    hair_colors,
    language,
    name,
    url,
  } = props;
  const navigate = useNavigate();

  function clickHandler() {
    const ident = url;
    var regex = /(\d+)/g;
    const id = ident.match(regex);
    navigate("/species/" + id);
    // window.location.assign(window.location.href + "?id=" + ide);
    return;
  }

  return (
    <button
      className="grid-persons bg-gray-700 hover:bg-gray-800"
      onClick={() => clickHandler()}
    >
      <div className="name-box">{name}</div>
      <div className="item-box">Average height: {average_height}</div>
      <div className="item-box">Average lifespan: {average_lifespan}</div>
      <div className="item-box">Clasification: {classification}</div>
      <div className="item-box">Designation: {designation}</div>
      <div className="item-box">Eye colors: {eye_colors}</div>
      <div className="item-box">Hair colors: {hair_colors}</div>
      <div className="item-box">Languaje: {language}</div>
    </button>
  );
}
