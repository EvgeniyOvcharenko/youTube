import React from "react";
import "./centralNav.css";
import CentralNavButton from "./centralNavButton/centralNavButton";

const buttonName = [
  "All",
  "Live stream",
  "Spread",
  "Video games",
  "Music",
  "Sketch show",
  "Football",
  "Action and adventure",
  "Cooking",
  "Latest published videos",
  "Viewed",
  "New for you",
];

class CentralNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonName: buttonName };
  }
  render() {
    return (
      <div className="centralNav">
        {this.state.buttonName.map((button, index) => {
          return <CentralNavButton key={index} button={button} />;
        })}
      </div>
    );
  }
}

export default CentralNav;
