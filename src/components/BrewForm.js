import React from 'react'

export default (props) => {
  const {currentTitle, currentIngredients, currentMethod, currentInitialSG, changeCurrentTitle} = props
  const handleTitleChange = (evt) => {
    const val = evt.target.value
    changeCurrentTitle(val)
  }
  return (
    <form>
     <input type="text"
       onChange={handleTitleChange}
       value={currentTitle}/>
     <input type="text" value={currentIngredients}/>
     <input type="text" value={currentMethod}/>
     <input type="number" value={currentInitialSG}/>
    </form>
  )
}
