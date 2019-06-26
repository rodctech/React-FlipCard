import React, { Component } from "react";

class CardProfileLinks extends Component {
  render() {
    const github = ["github", "https://github.com/rodctech"];
    const linkedin = [
      "linkedin",
      "https://linkedin.com/in/rodrigo-chavez-944118175"
    ];

    const profileLinks = [linkedin, github];

    const linksList = profileLinks.map((link, index) => (
      <li key={index} className="item">
        <a
          type={"button"}
          className={`mini ui icon ${link[0]} button`}
          href={link[1]}
          target={"_blank"}
        >
          <i className={`${link[0]} icon blue`} />
        </a>
      </li>
    ));

    return (
      <div className="card-social-links">
        <ul className="social-links">{linksList}</ul>
      </div>
    );
  }
}

export default CardProfileLinks;
