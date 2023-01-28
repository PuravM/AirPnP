import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import Navbar from "./Navbar";
class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <Navbar />
        <div className="banner__content">
          <h2>Explore!</h2>
          <h5>
            Connect, meet, and share space with AirPnP!
          </h5>
          <Link to="/result">
            <button>Explore Nearby</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Banner;
