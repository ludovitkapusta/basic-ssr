/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, combineReducers } from 'redux'

import generalReducer from '@store/general'
import { AppState } from './rootReducer'

// Preload all possible reducers
export const reducers: any = {
  generalReducer
}

/** Creates default reducer providing only initial state */
export const defaultReducer = (data: AppState): any => (
  state: AppState = data,
  action: any
): AppState => {
  switch (action.type) {
    default:
      return state
  }
}

/**  Will generate reducers on base of JS_CONFIG */
export const generateClientReducers = (initialData: any): any =>
  Object.keys(initialData).reduce((acc, curr) => {
    const reducerName = initialData[curr]?.componentSettings?.name

    return {
      ...acc,
      [curr]: reducers[reducerName]
        ? reducers[reducerName]
        : defaultReducer(initialData[curr])
    }
  }, {})

/**  Will merge default data base of JS_CONFIG and initial states of specified reducers */
export const combinedInitialState = (initialData: any): object =>
  Object.keys(initialData).reduce((acc, curr) => {
    const reducerName = initialData[curr]?.componentSettings?.name

    return reducers[reducerName]
      ? {
          ...acc,
          [curr]: {
            ...(createStore(
              combineReducers({ [curr]: reducers[reducerName] })
            ).getState()[curr as string] as object),
            ...initialData[curr]
          }
        }
      : acc
  }, {})

/**  Will generate reducer on base of initial data from BE */
export const generateSSRreducer = (initialData: any): any => {
  const reducerName = initialData?.componentSettings?.name

  return {
    [reducerName]: reducers[reducerName]
      ? reducers[reducerName]
      : defaultReducer(initialData)
  }
}

/**  Will merge default data base of initial data from BE and initial states of specified reducers */
export const combinedSSRInitialState = (initialData: any): any => {
  const reducerName = initialData?.componentSettings?.name

  return reducers[reducerName]
    ? {
        [reducerName]: {
          ...(createStore(reducers[reducerName]).getState() as object),
          ...initialData
        }
      }
    : {}
}
