import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/'><h2>Route1</h2></Link>
        <Link to='/2'><h2>Route2</h2></Link>
        <Link to='/3'><h2>Route3</h2></Link>
        {Routes}
      </div>
    );
  }
}

export default App;
