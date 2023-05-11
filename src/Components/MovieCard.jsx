import React from "react";
import "./Components.css";
import cardimg from "../Images/MovieCard.jpg";

const MovieCard = () => {
  return (
    <div className="card">
      <img src={cardimg} alt="card img" className="card-img" />
      <div className="card-body">
        <h1 className="card-title">XYZ</h1>
        <p className="Card-sub-title">jsdushdb</p>
        <p className="card-info">hdjhd</p>
        <button classname="btn">Book</button>
      </div>
    </div>
  );
};

export default MovieCard;
