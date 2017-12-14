import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </div>
        <div className="Brew-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Brew-List">
            <ul>
              <li>
                <input type="checkbox" /> Raspberry Mead
              </li>
              <li>
                <input type="checkbox" /> Chcolate Mead
              </li>
              <li>
                <input type="checkbox" /> Mead
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
