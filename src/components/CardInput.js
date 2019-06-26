import React, { Component } from "react";

class CardInput extends Component {
  render() {
    return (
      <fieldset>
        <input
          name={this.props.name}
          id={this.props.id}
          type={this.props.type || "text"}
          placeholder={this.props.placeholder}
          required
        />
      </fieldset>
    );
  }
}

export default CardInput;
