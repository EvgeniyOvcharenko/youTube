import React from "react";
import "./main.css";
import Card from "./card/card";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Card />
      </div>
    );
  }
}

export default Main;
