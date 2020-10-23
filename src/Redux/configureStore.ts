import { createStore, applyMiddleware, compose } from 'redux'
import { install, StoreCreator } from 'redux-loop'

import { RootReducer, RootState } from './Store'

const configureStore = (initialState: RootState) => {
  // Add middleware to this array if necessary
  const middleWares: any[] = []

  const enhancers = [applyMiddleware(...middleWares), install<RootState>()]

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      // @ts-ignore
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
      : compose

  const enhancedCreateStore = createStore as StoreCreator
  const store = enhancedCreateStore(
    RootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )

  return store
}

export { configureStore as default }
