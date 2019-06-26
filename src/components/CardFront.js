import React, { Component } from "react";
import "./main.css";

class CardFront extends Component {
  render() {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="col">
            <div className="col-xs-6">
              <img
                /* src={
                  "https://coverfiles.alphacoders.com/575/57553.png"
                } */
                width="100%"
                height="100%"
                className="bd-placeholder-img card-img-top"
                src={
                  "http://wallpapers.net/web/wallpapers/the-matrix-hd-wallpaper/1920x1080.jpg"
                }
                alt={"CardFront Pic"}
              />
            </div>

            <div className={"col"}>
              <div className="col-xs-6 side-front-content">
                <h1>Rodrigo Chavez</h1>

                <h2>Software Developer</h2>

                <p>
                  Rodrigo is driven by turning ideas into scalable and and
                  empowering experiences that solve real life problems.
                </p>

                <p>
                  He is currently a Senior @ Aurora University with an expected
                  graduation on December 2019.
                </p>

                <p>
                  Over the years, Rod has been able to work with Computer
                  Architecture, Robotics, Java, C++, SQL, ReactJS, Redux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFront;