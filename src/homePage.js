import React from "react";
import "./homePage.css";
import Header from "./components/header/header";
import LeftNav from "./components/leftNav/leftNav";
import CentralNav from "./components/centralNav/centralNav";
import Main from "./components/main/main";

// import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <div className="wrapper">
        <LeftNav />
        <div>
          <CentralNav />
          <Main />
        </div>
      </div>

      {/* <Link to="/secondPage">Putin huylo</Link> */}
    </div>
  );
}

export default HomePage;
