import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../Images/slide1.jpg";
import slide2 from "../Images/slide2.jpg";
import slide3 from "../Images/slide3.jpg";
import slide4 from "../Images/slide4.jpg";
import slide5 from "../Images/slide5.jpg";
import slide6 from "../Images/slide6.jpg";
import slide7 from "../Images/slide7.jpg";

const Slides = () => {

  return (
    <Carousel variant="dark">
     <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={slide1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={slide4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={slide5} alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={slide6} alt="Sixth slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={slide7} alt="Seventh slide" />
      </Carousel.Item>
  </Carousel>
  );
};

export default Slides;
