import React from 'react'

export default (props) => {
  const {currentTitle, currentIngredients, currentMethod, currentInitialSG, changeCurrentTitle, changeCurrentIngredients, changeCurrentMethod, changeCurrentInitialSG} = props
  const handleTitleChange = (evt) => {
    const val = evt.target.value
    changeCurrentTitle(val)
  }
  const handleIngredientsChange = (evt) => {
    const val = evt.target.value
    changeCurrentIngredients(val)
  }
  const handleMethodChange = (evt) => {
    const val = evt.target.value
    changeCurrentMethod(val)
  }
  const handleInitialSGChange = (evt) => {
    const val = evt.target.value
    changeCurrentInitialSG(val)
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
