import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Details.css"
import movieCard from "../Images/MovieCardBig.jpg";

const Details = () => {
  return (
    <>
      <Navbar />
      <div id="details">
        {/* <div id="movie-img">
          <img src={movieCard} alt="moviecard"/>
        </div> */}
        <div id="movie-details">
          <div id="movie-name">Movie Name</div>
          <div>
            <div>
              <span className="inline">ID : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">TYPE : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">LANGUAGE : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">GENRES : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">STATUS : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">RUNTIME : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">AVERAGE RUNTIME : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">PREMIERD : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">ENDED : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">OFFICIAL SITE : </span>
              <span></span>
            </div>
            <div>
              <span className="inline">SCHEDULE : </span>
              <span>
                <div>
                  <span className="inline">TIME : </span>
                  <span></span>
                </div>
                <div>
                  <span className="inline">DAYS : </span>
                  <span></span>
                </div>
                <div>
                  <span className="inline">RATINGS : </span>
                  <span>
                    <div>
                      <span className="inline">AVERAGE RATING : </span>
                      <span></span>
                    </div>
                  </span>
                </div>
                <div>
                  <span className="inline">WEIGHT : </span>
                  <span></span>
                </div>
                <div>
                  <span className="inline">NETWORK : </span>
                  <span>
                    <div>
                      <span className="inline">ID : </span>
                      <span></span>
                    </div>
                    <div>
                      <span className="inline">NAME : </span>
                      <span></span>
                    </div>
                    <div>
                      <span className="inline">COUNTRY : </span>
                      <span>
                        <div>
                          <span className="inline">NAME : </span>
                          <span></span>
                        </div>
                        <div>
                          <span className="inline">CODE : </span>
                          <span></span>
                        </div>
                        <div>
                          <span className="inline">TIMEZONE : </span>
                          <span></span>
                        </div>
                      </span>
                    </div>
                    <div>
                      <span className="inline">OFFICIAL SITE : </span>
                    </div>
                  </span>
                </div>
                <div>
                  <span className="inline">WEB CHANNEL : </span>
                  <span></span>
                </div>
                <div>
                  <span className="inline">DVD COUNTRY : </span>
                  <span></span>
                </div>
                <div>
                  <span className="inline">EXTERNALS : </span>
                  <span>
                    <div>
                      <span className="inline">tvrage : </span>
                      <span></span>
                    </div>
                    <div>
                      <span className="inline">thetvdb: </span>
                      <span></span>
                    </div>
                    <div>
                      <span className="inline">imdb : </span>
                      <span></span>
                    </div>
                  </span>
                </div>
                <div>
                  <span className="inline">SUMMARY : </span>
                  <span></span>
                </div>
                <div>
                  <span className="inline">UPDATED : </span>
                  <span></span>
                </div>
                <div></div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
