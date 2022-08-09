import React from "react";
import "./cardComponents.css";

class CardComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render(props) {
    console.log(this.props.url);
    return (
      <div className="cardComponent">
        <img className="image" src={this.props.url} alt="" />
        <p className="author">Author: {this.props.author}</p>
      </div>
    );
  }
}

export default CardComponents;
