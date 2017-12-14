const initState = {
  brews: [
    {id: 1, title: 'Mead', ingredients: 'honey, yeast, time', method: 'combine yeast and honey...wait', initialSG: 1.4, stage: 'Initial Fermentation' },
    {id: 2, title: 'Raspberry Mead', ingredients: 'honey, raspberries, yeast, time', method: 'combine yeast, raspberries and honey...wait', initialSG: 1.6, stage: 'Initial Fermentation' },
    {id: 3, title: 'Chocolate Mead', ingredients: 'honey, chocolate, yeast, time', method: 'combine yeast, chocolate and honey...wait', initialSG: 1.5, stage: 'Initial Fermentation' }
  ]
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'BREW_ADD':
      return {...state, brews: state.brews.concat(action.payload)}
    default:
      return state
  }
}
