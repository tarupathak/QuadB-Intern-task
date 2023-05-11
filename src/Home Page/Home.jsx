import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Slides from "../Components/Slides";

const Home = () => {
  return (
    <>
      <Navbar />
      <main id="home-page">
        <Slides />
      </main>
    </>
  );
};

export default Home;
