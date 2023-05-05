// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filmed } from "./Films.tsx";
export default function Film(props: Filmed) {
  let { director, episode_id, producer, release_date, title, url } = props;
  const navigate = useNavigate();

  function clickHandler() {
    const ident = url;
    var regex = /(\d+)/g;
    const id = ident.match(regex);
    navigate("/films/" + id);
    // window.location.assign(window.location.href + "?id=" + ide);
    return;
  }
  return (
    <button
      className="grid-persons bg-gray-700 hover:bg-gray-800"
      onClick={() => clickHandler()}
    >
      <div className="name-box">{title}</div>
      <div className="item-box"> Director: {director}</div>
      {/* <div className="item-box">Opening crawl: {opening_crawl}</div> */}
      <div className="item-box">Release date: {release_date}</div>
      <div className="item-box">Episode ID: {episode_id}</div>
      <div className="item-box">Producer: {producer}</div>
    </button>
  );
}
