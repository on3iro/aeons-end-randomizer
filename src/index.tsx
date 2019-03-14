import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './Redux/configureStore'
import { initialState } from './Redux/Store'

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// @ts-ignore
serviceWorker.register();
