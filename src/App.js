import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import BrewForm from './components/BrewForm';
import BrewList from './components/BrewList';
import {bindActionCreators} from 'redux';
import {updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG} from './reducers/brew';

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
            changeCurrentTitle={this.props.updateCurrentTitle}
            currentIngredients={this.props.currentIngredients}
            changeCurrentIngredients={this.props.updateCurrentIngredients}
            currentMethod={this.props.currentMethod}
            changeCurrentMethod={this.props.updateCurrentMethod}
            currentInitialSG={this.props.currentInitialSG}
            changeCurrentInitialSG={this.props.updateCurrentInitialSG}
          />
          <BrewList brews={this.props.brews} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG}, dispatch)
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp
