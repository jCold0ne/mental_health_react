import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Pet the Kitty</h1>
        <h2>No Seriously... Pet the Kitty!</h2>
        <div>
          <Link to="/kitty">
            <button>Generate Cuteness</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
