import React from "react";
import "./header.css";
import Menu from "./menu/menu";
import Logo from "./logo/logo";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <Menu />
        <Logo />
      </div>
    );
  }
}

export default Header;
