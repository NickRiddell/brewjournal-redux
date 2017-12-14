import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const brewTitleChangeHandler = (val) => store.dispatch({type:'CURRENT_TITLE_UPDATE', payload: val})

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App brews={state.brews}
    currentTitle={state.currentTitle}
    currentIngredients={state.currentIngredients}
    currentMethod={state.currentMethod}
    currentInitialSG={state.currentInitialSG}
    changeCurrentTitle={brewTitleChangeHandler}
    />,
    document.getElementById('root'));
}
render()

store.subscribe(render)

registerServiceWorker();
