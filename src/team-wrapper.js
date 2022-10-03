import React, { Component } from "react";
import Card from "./Team-card";
import "./membercard.css";

class teamWrapper extends Component {
  state = {};
  render() {
    return (
      <div className="team-wrapper">
        <Card />
      </div>
    );
  }
}

export default teamWrapper;
