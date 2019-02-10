import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Search from './Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>          
          <div className="container">
            <Switch>
              <Route exact path="/" component={Search} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
