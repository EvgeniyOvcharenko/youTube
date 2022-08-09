import React from "react";
import "./leftNavComponent.css";

const iconClass = "icon";

class LeftNavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <button className="itemContainer">
        <span className={this.props.icon + " " + iconClass}></span>
        <span className="topNavText">{this.props.name}</span>
      </button>
    );
  }
}

export default LeftNavComponent;
