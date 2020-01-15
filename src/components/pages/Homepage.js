import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Pet the Kitty</h1>
                <div>
                    <Link to="/kitty">
                        <button>Generate Quteness</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomePage;