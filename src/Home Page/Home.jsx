import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Slides from "../Components/Slides";
import MovieCard from "../Components/MovieCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <main id="home-page">
        <Slides />
        <div id="title"> BOOK YOUR MOVIE </div>
        <MovieCard />
      </main>
    </>
  );
};

export default Home;
