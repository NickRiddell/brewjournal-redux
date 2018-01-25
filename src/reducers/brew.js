import {getBrews, createBrew} from '../lib/brewServices'
const initState = {
  brews: [],
  currentTitle: '',
  currentIngredients: '',
  currentMethod: '',
  currentInitialSG: ''
}

const BREW_ADD = 'BREW_ADD'
const BREWS_LOAD = 'BREWS_LOAD'
const CURRENT_TITLE_UPDATE = 'CURRENT_TITLE_UPDATE'
const CURRENT_INGREDIENTS_UPDATE = 'CURRENT_INGREDIENTS_UPDATE'
const CURRENT_METHOD_UPDATE = 'CURRENT_METHOD_UPDATE'
const CURRENT_INITIALSG_UPDATE = 'CURRENT_INITIALSG_UPDATE'

export const updateCurrentTitle = (val) => ({type:CURRENT_TITLE_UPDATE, payload: val})
export const updateCurrentIngredients = (val) => ({type:CURRENT_INGREDIENTS_UPDATE, payload: val})
export const updateCurrentMethod = (val) => ({type:CURRENT_METHOD_UPDATE, payload: val})
export const updateCurrentInitialSG = (val) => ({type:CURRENT_INITIALSG_UPDATE, payload: val})
export const loadBrews = (brews) => ({type: BREWS_LOAD, payload: brews})
export const addBrew = (brew) => ({type: BREW_ADD, payload: brew})
export const fetchBrews = () => {
  return (dispatch) => {
    getBrews()
    .then(brews => dispatch(loadBrews(brews)))
  }
}

export const saveBrew = (title, ingredients, method, initialSG) => {
  return (dispatch) => {
    createBrew(title, ingredients, method, initialSG)
    .then(res => dispatch(addBrew(res)))
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case BREW_ADD:
      return {...state, currentTitle: '', currentIngredients: '', currentMethod: '', currentInitialSG: '', brews: state.brews.concat(action.payload)}
    case BREWS_LOAD:
      return {...state, brews: action.payload}
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
