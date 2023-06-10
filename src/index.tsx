import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import JssProvider from 'react-jss/lib/JssProvider'

// @ts-ignore
import { create } from 'jss'

import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'

import App from './components/App'
import * as serviceWorker from './serviceWorker'
import configureStore from './Redux/configureStore'
import { initialState } from './Redux/Store'

const store = configureStore(initialState)

const generateClassName = createGenerateClassName()
// @ts-ignore
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
})

ReactDOM.render(
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <App />
    </JssProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// @ts-ignore
serviceWorker.register()
