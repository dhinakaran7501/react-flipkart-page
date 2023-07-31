import "./Carousel.css";
import React, { Component } from "react";

export class Carousel extends Component {
  render() {
    const c1 =
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ec99b461d4e3de8.jpg?q=20";
    const c2 =
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6ca4f03d5d995716.png?q=20";
    const c3 =
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2ec0d4b0dbf3e01f.jpg?q=20";
    const c4 =
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa3ffec33d25334b.png?q=20";
    return (
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c4} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="previous"
            aria-hidden="true"
          ><i class="bi bi-chevron-left"></i></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="next"
            aria-hidden="true"
          ><i class="bi bi-chevron-right"></i></span>
        </button>
      </div>
    );
  }
}

export default Carousel;
