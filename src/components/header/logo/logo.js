import React from "react";
import logo from "../img/logo.png";
import "./logo.css";

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="logoContainer">
        <img className="logo" src={logo} alt="1" />
        <span className="textUA">UA</span>
      </div>
    );
  }
}

export default Logo;
