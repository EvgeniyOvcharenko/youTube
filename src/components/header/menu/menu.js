import React from "react";
import menu from "../img/menu.png";
import "./menu.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu">
        <img src={menu} alt="1" />
      </div>
    );
  }
}

export default Menu;
