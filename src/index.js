import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
  brews: [
    {id: 1, title: 'Mead', ingredients: 'honey, yeast, time', method: 'combine yeast and honey...wait', initialSG: 1.4, stage: 'Initial Fermentation' },
    {id: 2, title: 'Raspberry Mead', ingredients: 'honey, raspberries, yeast, time', method: 'combine yeast, raspberries and honey...wait', initialSG: 1.6, stage: 'Initial Fermentation' },
    {id: 3, title: 'Chocolate Mead', ingredients: 'honey, chocolate, yeast, time', method: 'combine yeast, chocolate and honey...wait', initialSG: 1.5, stage: 'Initial Fermentation' }
  ]
}
ReactDOM.render(<App brews={state.brews} />, document.getElementById('root'));
registerServiceWorker();
