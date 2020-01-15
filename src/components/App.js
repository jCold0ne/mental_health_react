import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";

class App extends Component {    
    render() {


        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route 
                            exact path="/kitty" 
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
