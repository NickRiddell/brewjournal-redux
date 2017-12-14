const initState = {
  brews: []
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'BREW_ADD':
      return {...state, brews: state.brews.concat(action.payload)}
    default:
      return state
  }
}
