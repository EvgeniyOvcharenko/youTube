import React from "react";
import "./centralNavButton.css";

class CentralNavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    return <button className="centralNavButton">{this.props.button}</button>;
  }
}

export default CentralNavButton;
