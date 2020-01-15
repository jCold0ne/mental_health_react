import React, { Component } from "react";

class KittyPage extends Component {
    render() {
      return (
        <div>
          <h1>Kitties are the cure</h1>
          <div>
            <Link to="/cured">
              <button>I'm cured!</button>
            </Link>
          </div>
        </div>
      );
    }
  }
  
  export default KittyPage;