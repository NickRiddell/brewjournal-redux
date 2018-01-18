import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrewForm from './components/BrewForm';
import BrewList from './components/BrewList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </div>
        <div className="Brew-App">
          <BrewForm />
          <BrewList />
        </div>
      </div>
    );
  }
}

export default App
