import general from '@server/appData/general'
import { GeneralState, GeneralActions } from './types'

export const initialState: GeneralState = general.config

export default (
  state: GeneralState = initialState,
  action: GeneralActions,
): GeneralState => {
  switch (action.type) {
    default:
      return state
  }
}
