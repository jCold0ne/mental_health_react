import React, { Component } from "react";
import { Link } from "react-router-dom";
import KittyForm from "./../forms/KittyForm";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Pet the Kitty</h1>
        <div>
            <KittyForm />
          <Link to="/kitty">
            <button>Generate Cuteness</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
