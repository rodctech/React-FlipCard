import React, { Component } from "react";
//import Flippy, { FrontSide, BackSide } from "react-flippy";

import "./main.css";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import Header from "./Header";

class App extends Component {
  render() {
    return (
        <div>
            <Header />
      <div className="card-container">
        <div className="card-body">
          <CardBack />
          <CardFront />
        </div>
      </div>
        </div>
    );
  }
}

export default App;
