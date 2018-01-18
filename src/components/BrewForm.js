import React from 'react';
import {connect} from 'react-redux';
import {updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG} from '../reducers/brew';

const BrewForm = (props) => {
  const {currentTitle, currentIngredients, currentMethod, currentInitialSG, updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG} = props
  const handleTitleChange = (evt) => {
    const val = evt.target.value
    updateCurrentTitle(val)
  }
  const handleIngredientsChange = (evt) => {
    const val = evt.target.value
    updateCurrentIngredients(val)
  }
  const handleMethodChange = (evt) => {
    const val = evt.target.value
    updateCurrentMethod(val)
  }
  const handleInitialSGChange = (evt) => {
    const val = evt.target.value
    updateCurrentInitialSG(val)
  }
  return (
    <form>
     <input type="text"
       onChange={handleTitleChange}
       value={currentTitle}/>
     <input type="text"
       onChange={handleIngredientsChange}
       value={currentIngredients}/>
     <input type="text"
       onChange={handleMethodChange}
       value={currentMethod}/>
     <input type="number"
       onChange={handleInitialSGChange}
       value={currentInitialSG}/>
    </form>
  )
}

export default connect(
  (state) => ({currentTitle: state.currentTitle, currentIngredients: state.currentIngredients, currentMethod: state.currentMethod, currentInitialSG: state.currentInitialSG}),
  {updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG}
)(BrewForm)
