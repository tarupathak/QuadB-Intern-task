import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Details.css";
import {
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import MovieDetails from "../Components/MovieDetails";
import React, { useState, useEffect } from "react";

const Details = () => {
  const navigate = useLocation();
  const item = navigate.state;
  if (item.show.image) var image = item.show.image.original;
  if (item.show.rating.average) var ratinhg = item.show.rating.average;

  return (
    <>
      <Navbar />
      <div id="movieDetails">
        <img src={image} alt="image" />
        <div>
        <div id="movie-name">{item.show.name}</div>
        <div id ="summary" dangerouslySetInnerHTML={{ __html: item.show.summary }} />
        <div><span className="title-name">Schedule : </span><span>{item.show.schedule.time} on {item.show.schedule.days}</span></div>
         <div id="btn"><span>Previous Episode</span><span>Book</span><span>Next Episode</span>
        </div>
        </div>
         </div>
      <Footer />
    </>
  );
};

export default Details;
