import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import BrewForm from './components/BrewForm'
import BrewList from './components/BrewList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </div>
        <div className="Brew-App">
          <BrewForm
            currentTitle={this.props.currentTitle}
            changeCurrentTitle={this.props.changeCurrentTitle}
            currentIngredients={this.props.currentIngredients}
            changeCurrentIngredients={this.props.changeCurrentIngredients}
            currentMethod={this.props.currentMethod}
            changeCurrentMethod={this.props.changeCurrentMethod}
            currentInitialSG={this.props.currentInitialSG}
            changeCurrentInitialSG={this.props.changeCurrentInitialSG}
          />
          <BrewList brews={this.props.brews} />
        </div>
      </div>
    );
  }
}

// export default App;
const mapStateToProps = (state) => state
const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp
