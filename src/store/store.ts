/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import rootReducer from './rootReducer'
import { combinedInitialState } from './generateReducers'

const store = createStore(
  rootReducer,
  combinedInitialState(window.JS_CONFIG),
  composeWithDevTools(applyMiddleware(logger))
)

export default store
