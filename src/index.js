import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {bindActionCreators} from 'redux'
import {updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG} from './reducers/brew'

const actions = bindActionCreators({updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG
}, store.dispatch)

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App brews={state.brews}
    currentTitle={state.currentTitle}
    changeCurrentTitle={actions.updateCurrentTitle}
    currentIngredients={state.currentIngredients}
    changeCurrentIngredients={actions.updateCurrentIngredients}
    currentMethod={state.currentMethod}
    changeCurrentMethod={actions.updateCurrentMethod}
    currentInitialSG={state.currentInitialSG}
    changeCurrentInitialSG={actions.updateCurrentInitialSG}
    />,
    document.getElementById('root'));
}
render()

store.subscribe(render)

registerServiceWorker();
