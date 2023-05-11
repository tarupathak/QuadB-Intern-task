import React, { useState, useEffect } from "react";
import "./Components.css";
import axios from "axios";

import { NavLink } from "react-router-dom";

const MovieCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        alert("Something went wrong.");
      });
  }, []);
  return (
    <>
      <div id="cards-design">
        {data.map((item) => {
          if (item.show.image) var src = item.show.image.medium;
          return (
            <div className="card">
              <img src={src} alt="card img" className="card-img" />
              <div className="card-body">
                <h1 className="card-title">{item.show.name}</h1>
                <p className="Card-sub-title">
                  <div>
                    <span>Movie Score : </span>
                    <span>{item.score}</span>
                  </div>
                  <div>
                    <span>Movie Id : </span>
                    <span>{item.show.id}</span>
                  </div>
                </p>
                <p className="card-info">
                  <div>
                    <span>Type : </span>
                    <span>{item.show.type}</span>
                  </div>
                  <div>
                    <span>Language : </span>
                    <span>{item.show.language}</span>
                  </div>
                  <div>
                    <span>Genres : </span>
                    <span>{item.show.genres}</span>
                  </div>
                  <div>
                    <span>Status : </span>
                    <span>{item.show.status}</span>
                  </div>
                  <div>
                    <span>Runtime : </span>
                    <span>{item.show.runtime}</span>
                  </div>
                  <div>
                    <span>Average Runtime : </span>
                    <span>{item.show.averageRuntime}</span>
                  </div>
                  <div>
                    <span>Premierd : </span>
                    <span>{item.show.premiered}</span>
                  </div>
                  <div>
                    <span>Ended : </span>
                    <span>{item.show.ended}</span>
                  </div>
                  <div>
                    <span>Schedule : </span>
                    <span>{item.show.schedule.time} </span>on
                    <span> {item.show.schedule.days}</span>
                  </div>
                  <div>
                    <span>Average Rating : </span>
                    <span>{item.show.rating.average}</span>
                  </div>
                </p>
                <NavLink to="/details">
                  <button classname="btn">Show Details</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieCard;
