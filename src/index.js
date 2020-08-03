import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'; // provider helps to inject redux store to react components
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import reducer from './store/reducer'
import counterReducer from './store/reducers/counterReducer'
import resultReducer from './store/reducers/resultReducer'

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
})
// Redux Advance methd 'middleware'
// this is basic middlware 
const logger = store => {
  return next => {  // This next is basically like next in expressjs this function let the action continue as you want this can be named anything
    return action => {  // next function will execute this function with action argument.
      console.log('[Middleware] dispatching...', action); // both log actions logged only when action is dispatched
      const result = next(action) // To execute action we need to pass action in next here
      console.log('[Middleware] next state', store.getState());
      return result
    }
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //setting up redux devtools, compose allows us to combine enhancers

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger, thunk))) //here's how we apply middleware to store and use compose enhancer for redux devtools. used thunk as middleware for asynv func

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
//store property used to Provider to connect aout store to app


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
