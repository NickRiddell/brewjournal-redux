import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG, saveBrew} from '../reducers/brew';

class BrewForm extends Component {
  handleTitleChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrentTitle(val)
  }
  handleIngredientsChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrentIngredients(val)
  }
  handleMethodChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrentMethod(val)
  }
  handleInitialSGChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrentInitialSG(val)
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.saveBrew(this.props.currentTitle, this.props.currentIngredients, this.props.currentMethod, this.props.currentInitialSG)
  }

  render() {
    const {currentTitle, currentIngredients, currentMethod, currentInitialSG} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
       <input type="text"
         onChange={this.handleTitleChange}
         value={currentTitle}/>
       <input type="text"
         onChange={this.handleIngredientsChange}
         value={currentIngredients}/>
       <input type="text"
         onChange={this.handleMethodChange}
         value={currentMethod}/>
       <input type="number"
         onChange={this.handleInitialSGChange}
         value={currentInitialSG}/>
      <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default connect(
  (state) => ({currentTitle: state.currentTitle, currentIngredients: state.currentIngredients, currentMethod: state.currentMethod, currentInitialSG: state.currentInitialSG}),
  {updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG, saveBrew}
)(BrewForm)
