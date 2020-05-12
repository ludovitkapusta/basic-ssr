import { createStore, combineReducers } from 'redux'
import { initialState } from '../src/store/general'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const store = data => {
  const componentData = {
    config: data,
    general: initialState
  }

  return createStore(
    combineReducers({
      [componentData.config.componentSettings.name]: (
        state = componentData.config
      ) => state,
      general: (state = componentData.general) => state
    })
  )
}

export default store
