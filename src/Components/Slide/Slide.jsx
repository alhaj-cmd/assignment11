import React from "react";
import { Carousel } from "react-bootstrap";

const Slide = () => {
  return (
    <Carousel className="container mt-5">
      <Carousel.Item>
        <img
         className="d-block w-100"
          src="https://i.ibb.co/CtJXgMc/A-man-mechanic-and-woman-customer-look-at-the-car-hood-and-discuss-repairs.jpg"
          alt="First slide"
         
        />
        <Carousel.Caption>
          <h3 >Car-repairing slide</h3>
          <p>
          man-mechanic-woman-customer-look-car-hood-discuss-repairs
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block w-100"
          src="https://i.ibb.co/wY8ct7t/Picture-showing-muscular-car-service-worker-repairing-vehicle.jpg"
          alt="Second slide"
         
        />

        <Carousel.Caption>
          <h3 >Car-repairing slide</h3>
          <p>
          muscular-car-service-worker-repairing-vehicle.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block w-100"
          src="https://i.ibb.co/YBJgyZY/mechanic-servicing-car.jpg"
          alt="Third slide"
          
        />

        <Carousel.Caption>
          <h3 >Car-repairing slide</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
