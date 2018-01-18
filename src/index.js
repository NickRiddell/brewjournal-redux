import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {bindActionCreators} from 'redux'
import {updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG} from './reducers/brew'

const actions = bindActionCreators({updateCurrentTitle, updateCurrentIngredients, updateCurrentMethod, updateCurrentInitialSG
}, store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <App
    changeCurrentTitle={actions.updateCurrentTitle}
    changeCurrentIngredients={actions.updateCurrentIngredients}
    changeCurrentMethod={actions.updateCurrentMethod}
    changeCurrentInitialSG={actions.updateCurrentInitialSG}
    />
  </Provider>,
document.getElementById('root'));

registerServiceWorker();
