import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Details.css";
import {
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

const Details = () => {
  const navHandler = useNavigate();
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
          <div id="det_ails">
            <div id="movie-name">{item.show.name}</div>
            <div
              id="summary"
              dangerouslySetInnerHTML={{ __html: item.show.summary }}
            />
            <div id="details">
              <div>
                <span className="title-name">Schedule : </span>
                <span>
                  {item.show.schedule.time} on {item.show.schedule.days}
                </span>
              </div>
              <div>
                <span className="title-name">Language : </span>
                <span>{item.show.language}</span>
              </div>
              <div>
                <span className="title-name">Genres : </span>
                <span>{item.show.genres}</span>
              </div>
              <div>
                <span className="title-name">Runtime : </span>
                <span>{item.show.runtime}</span>
              </div>
              <div>
                <span className="title-name">Average Runtime : </span>
                <span>{item.show.averageRuntime}</span>
              </div>
              <div>
                <span className="title-name">Premiered : </span>
                <span>{item.show.premiered}</span>
              </div>
              <div>
                <span className="title-name">Ended : </span>
                <span>{item.show.ended}</span>
              </div>
              <div>
                <span className="title-name">Ratings : </span>
                <span>{item.show.rating.average}/10</span>
              </div>
            </div>
            <div id="btn">
              <span>
                Previous Episode
              </span>
              <span>Book</span>
              <span>Next Episode</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
