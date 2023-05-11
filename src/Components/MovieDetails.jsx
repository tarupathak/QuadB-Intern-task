import React from "react";
import { NavLink } from "react-router-dom";


const MovieDetails = (item) => {

  return (
    <div> <div id="details">
            <div id="movie-details">
              <div id="movie-name">{item.item.show.name}</div>
              <div>
                <div>
                  <span className="inline">ID : </span>
                  <span>{item.item.show.id}</span>
                </div>
                <div>
                  <span className="inline">TYPE : </span>
                  <span>{item.item.show.type}</span>
                </div>
                <div>
                  <span className="inline">LANGUAGE : </span>
                  <span>{item.item.show.language}</span>
                </div>
                <div>
                  <span className="inline">GENRES : </span>
                  <span>{item.item.show.genres}</span>
                </div>
                <div>
                  <span className="inline">STATUS : </span>
                  <span>{item.item.show.status}</span>
                </div>
                <div>
                  <span className="inline">RUNTIME : </span>
                  <span>{item.item.show.runtime}</span>
                </div>
                <div>
                  <span className="inline">AVERAGE RUNTIME : </span>
                  <span>{item.item.show.averageRuntime}</span>
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
                          <span></span>
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
              <div id="book-btn">
                <NavLink to="/">
                  <span>Previous Show</span>
                </NavLink>
                <NavLink to="/">
                  <span>Book</span>
                </NavLink>
                <NavLink to="/">
                  <span>Next Show</span>
                </NavLink>
              </div>
            </div>
          </div>
    </div>
  );
};

export default MovieDetails;
