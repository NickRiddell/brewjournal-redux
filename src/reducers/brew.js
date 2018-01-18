const initState = {
  brews: [
    {id: 1, title: 'Mead', ingredients: 'honey, yeast, time', method: 'combine yeast and honey...wait', initialSG: 1.4, stage: 'Initial Fermentation' },
    {id: 2, title: 'Raspberry Mead', ingredients: 'honey, raspberries, yeast, time', method: 'combine yeast, raspberries and honey...wait', initialSG: 1.6, stage: 'Initial Fermentation' },
    {id: 3, title: 'Chocolate Mead', ingredients: 'honey, chocolate, yeast, time', method: 'combine yeast, chocolate and honey...wait', initialSG: 1.5, stage: 'Initial Fermentation' }
  ],
  currentTitle: 'tempTitle',
  currentIngredients: 'tempIngredients',
  currentMethod: 'tempMethod',
  currentInitialSG: 1
}

const BREW_ADD = 'BREW_ADD'
const CURRENT_TITLE_UPDATE = 'CURRENT_TITLE_UPDATE'
const CURRENT_INGREDIENTS_UPDATE = 'CURRENT_INGREDIENTS_UPDATE'
const CURRENT_METHOD_UPDATE = 'CURRENT_METHOD_UPDATE'
const CURRENT_INITIALSG_UPDATE = 'CURRENT_INITIALSG_UPDATE'

export const updateCurrentTitle = (val) => ({type:CURRENT_TITLE_UPDATE, payload: val})
export const updateCurrentIngredients = (val) => ({type:CURRENT_INGREDIENTS_UPDATE, payload: val})
export const updateCurrentMethod = (val) => ({type:CURRENT_METHOD_UPDATE, payload: val})
export const updateCurrentInitialSG = (val) => ({type:CURRENT_INITIALSG_UPDATE, payload: val})

export default (state = initState, action) => {
  switch (action.type) {
    case BREW_ADD:
      return {...state, brews: state.brews.concat(action.payload)}
    case CURRENT_TITLE_UPDATE:
      return {...state, currentTitle: action.payload}
    case CURRENT_INGREDIENTS_UPDATE:
      return {...state, currentIngredients: action.payload}
    case CURRENT_METHOD_UPDATE:
      return {...state, currentMethod: action.payload}
    case CURRENT_INITIALSG_UPDATE:
      return {...state, currentInitialSG: action.payload}
    default:
      return state
  }
}
