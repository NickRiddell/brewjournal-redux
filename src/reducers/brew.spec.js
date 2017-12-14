import reducer from './brew'

describe('Brew Reducer', () => {
 test('returns a state object', () => {
   const result = reducer(undefined, {type:'ANYTHING'})
   expect(result).toBeDefined()
 })
 test('adds a brew', () => {
 const startState = {
   brews: [
     {id: 1, title: 'Mead', ingredients: 'honey, yeast, time', method: 'combine yeast and honey...wait', initialSG: 1.4, stage: 'Initial Fermentation' },
     {id: 2, title: 'Raspberry Mead', ingredients: 'honey, raspberries, yeast, time', method: 'combine yeast, raspberries and honey...wait', initialSG: 1.6, stage: 'Initial Fermentation' },
     {id: 3, title: 'Chocolate Mead', ingredients: 'honey, chocolate, yeast, time', method: 'combine yeast, chocolate and honey...wait', initialSG: 1.5, stage: 'Initial Fermentation' }
   ]
 }
 const expectedState = {
   brews: [
     {id: 1, title: 'Mead', ingredients: 'honey, yeast, time', method: 'combine yeast and honey...wait', initialSG: 1.4, stage: 'Initial Fermentation' },
     {id: 2, title: 'Raspberry Mead', ingredients: 'honey, raspberries, yeast, time', method: 'combine yeast, raspberries and honey...wait', initialSG: 1.6, stage: 'Initial Fermentation' },
     {id: 3, title: 'Chocolate Mead', ingredients: 'honey, chocolate, yeast, time', method: 'combine yeast, chocolate and honey...wait', initialSG: 1.5, stage: 'Initial Fermentation' },
     {id: 4, title: 'Mango Mead', ingredients: 'honey, mango, yeast, time', method: 'combine yeast, mango and honey...wait', initialSG: 1.5, stage: 'Initial Fermentation' }
   ]
 }
 const action = {type:'BREW_ADD', payload: {id: 4, title: 'Mango Mead', ingredients: 'honey, mango, yeast, time', method: 'combine yeast, mango and honey...wait', initialSG: 1.5, stage: 'Initial Fermentation' }}
 const result = reducer(startState, action)
 expect(result).toEqual(expectedState)
  })
})
