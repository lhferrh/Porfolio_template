import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";

import home from "./Home";
import projects from "./Projects";
import Navigation from "./Navigation";
//<Route exact path="/item/:id" component={Item} />
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <BrowserRouter>
          <div>
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/projects" component={projects} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
        <footer />
      </div>
    );
  }
}

export default App;
