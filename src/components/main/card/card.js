import React from "react";
import "./card.css";
import CardComponents from "./cardComponents/cardComponents";
import { fetchCards } from "../../../api/api";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      items: [],
    };
  }

  componentDidMount() {
    fetchCards().then(
      (data) => {
        let items = [];
        data.map((item) => items.push(item));
        this.setState({
          items: items,
        });
      },
      (error) => {
        this.setState({
          error,
        });
      }
    );
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="cardContainer">
        {this.state.items.map((item, index) => {
          return (
            <CardComponents
              key={index}
              url={item.download_url}
              author={item.author}
            />
          );
        })}
      </div>
    );
  }
}

export default Card;
