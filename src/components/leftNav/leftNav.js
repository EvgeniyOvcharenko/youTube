import React from "react";
import "./leftNav.css";
import LeftNavComponent from "./leftNavComponent/leftNavComponent";

const firstButtonList = [
  { icon: "icon-home", name: "Home" },
  { icon: "icon-navigation", name: "Navigation" },
  { icon: "icon-shorts", name: "Shorts" },
  { icon: "icon-subscriptions", name: "Subscriptions" },
  { icon: "icon-originals", name: "Originals" },
  { icon: "icon-music", name: "YouTube Music" },
];

const secondButtonList = [
  { icon: "icon-library", name: "Library" },
  { icon: "icon-history", name: "History" },
  { icon: "icon-my-video", name: "My videos" },
  { icon: "icon-see-later", name: "Watch later" },
  { icon: "icon-downloads", name: "Downloads" },
  { icon: "icon-liked", name: "Liked videos" },
];

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstButtonList: firstButtonList,
      secondButtonList: secondButtonList,
    };
  }
  render() {
    return (
      <div className="leftNavContainer">
        {this.state.firstButtonList.map((item, index) => {
          return (
            <LeftNavComponent key={index} icon={item.icon} name={item.name} />
          );
        })}
        <hr className="line" />
        {this.state.secondButtonList.map((item, index) => {
          return (
            <LeftNavComponent key={index} icon={item.icon} name={item.name} />
          );
        })}
        <hr className="line" />
      </div>
    );
  }
}

export default LeftNav;
