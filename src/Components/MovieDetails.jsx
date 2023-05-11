import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetails = () => {

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
    <div>
      {data.map((item) => {
        return (
          <div id="details">
            <div id="movie-details">
              <div id="movie-name">{item.show.name}</div>
              <div>
                <div>
                  <span className="inline">ID : </span>
                  <span>{item.show.id}</span>
                </div>
                <div>
                  <span className="inline">TYPE : </span>
                  <span>{item.show.type}</span>
                </div>
                <div>
                  <span className="inline">LANGUAGE : </span>
                  <span>{item.show.language}</span>
                </div>
                <div>
                  <span className="inline">GENRES : </span>
                  <span>{item.show.genres}</span>
                </div>
                <div>
                  <span className="inline">STATUS : </span>
                  <span>{item.show.status}</span>
                </div>
                <div>
                  <span className="inline">RUNTIME : </span>
                  <span>{item.show.runtime}</span>
                </div>
                <div>
                  <span className="inline">AVERAGE RUNTIME : </span>
                  <span>{item.show.averageRuntime}</span>
                </div>
                <div>
                  <span className="inline">PREMIERD : </span>
                  <span>{item.show.premiered}</span>
                </div>
                <div>
                  <span className="inline">ENDED : </span>
                  <span>{item.show.ended}</span>
                </div>
                <div>
                  <span className="inline">OFFICIAL SITE : </span>
                  <span>item.show.officialSite</span>
                </div>
                <div>
                  <span className="inline">SCHEDULE : </span>
                  <span>
                    <div>
                      <span className="inline">TIME : </span>
                      <span>{item.show.schedule.time}</span>
                    </div>
                    <div>
                      <span className="inline">DAYS : </span>
                      <span>{item.show.schedule.days}</span>
                    </div>
                    <div>
                      <span className="inline">RATINGS : </span>
                      <span>
                        <div>
                          <span className="inline">AVERAGE RATING : </span>
                          <span>{item.show.rating.averageRuntime}</span>
                        </div>
                      </span>
                    </div>
                    <div>
                      <span className="inline">WEIGHT : </span>
                      <span>{item.show.weight}</span>
                    </div>
                    <div>
                      <span className="inline">NETWORK : </span>
                      <span>
                        <div>
                          <span className="inline">ID : </span>
                          <span>{item.show.network.id}</span>
                        </div>
                        <div>
                          <span className="inline">NAME : </span>
                          <span>{item.show.network.name}</span>
                        </div>
                        <div>
                          <span className="inline">COUNTRY : </span>
                          <span>
                            <div>
                              <span className="inline">NAME : </span>
                              <span>{item.show.network.country.name}</span>
                            </div>
                            <div>
                              <span className="inline">CODE : </span>
                              <span>{item.show.network.country.code}</span>
                            </div>
                            <div>
                              <span className="inline">TIMEZONE : </span>
                              <span>{item.show.network.country.timezone}</span>
                            </div>
                          </span>
                        </div>
                        <div>
                          <span className="inline">OFFICIAL SITE : </span>
                          <span>{item.show.network.officialSite}</span>
                        </div>
                      </span>
                    </div>
                    <div>
                      <span className="inline">WEB CHANNEL : </span>
                      <span>{item.show.webChannel}</span>
                    </div>
                    <div>
                      <span className="inline">DVD COUNTRY : </span>
                      <span>{item.show.dvdCountry}</span>
                    </div>
                    <div>
                      <span className="inline">EXTERNALS : </span>
                      <span>
                        <div>
                          <span className="inline">tvrage : </span>
                          <span>{item.show.externals.tvrage}</span>
                        </div>
                        <div>
                          <span className="inline">thetvdb: </span>
                          <span>{item.show.externals.thetvdb}</span>
                        </div>
                        <div>
                          <span className="inline">imdb : </span>
                          <span>{item.show.externals.imdb}</span>
                        </div>
                      </span>
                    </div>
                    <div>
                      <span className="inline">SUMMARY : </span>
                      <span>{item.show.summary}</span>
                    </div>
                    <div>
                      <span className="inline">UPDATED : </span>
                      <span>{item.show.networklinks}</span>
                    </div>
                    <div></div>
                  </span>
                </div>
              </div>
              <div id="book-btn">
                <span>Previous Show</span>
                <span>Book</span>
                <span>Next Show</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieDetails;
