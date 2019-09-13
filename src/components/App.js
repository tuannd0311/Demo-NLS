import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home-page'
import Login from './login-page'

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className='content'>
          <Router>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
          </Router>
        </div>
      </div>
    );
  }
}
