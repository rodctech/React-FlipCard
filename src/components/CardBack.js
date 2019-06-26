import React, { Component } from "react";
import CardInput from "./CardInput";
import CardTextarea from "./CardTextarea";
import CardBtn from "./CardBtn";
import CardProfileLinks from "./CardProfileLinks";

import "./main.css";

class CardBack extends Component {
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid shadow-sm">
          <h1>Let's Connect!</h1>

          <form formAction="" className="card-form">
            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactFirstName"
                  id="contactFirstName"
                  type="text"
                  placeholder="Your first name"
                />
              </div>

              <div className="col-xs-6">
                <CardInput
                  name="contactLastName"
                  id="contactLastName"
                  type="text"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactEmail"
                  id="contactEmail"
                  type="email"
                  placeholder="Your email address"
                />
              </div>

              <div className="col-xs-6">
                <CardInput
                  name="contactSubject"
                  id="contactSubject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>

            <CardTextarea
              name="contactMessage"
              id="contactMessage"
              placeholder="Your message"
            />

            <CardBtn
              className="btn btn-primary"
              type="submit"
              value="Get in touch!"
            />
          </form>

          <CardProfileLinks />
        </div>
      </div>
    );
  }
}

export default CardBack;
