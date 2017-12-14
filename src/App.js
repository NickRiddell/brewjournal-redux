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
           <input type="text"/>
           <input type="text"/>
           <input type="number"/>
          </form>
          <div className="Brew-List">
            <ul>
              {this.props.brews.map(brew => (
                <li key={brew.id}>
                  {brew.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
