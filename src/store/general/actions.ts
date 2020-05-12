import general from '@server/appData/general'
import { GENERAL_INIT, GeneralInit } from './types'

// eslint-disable-next-line import/prefer-default-export
export const GeneralInitAction = (): GeneralInit => {
  return {
    type: GENERAL_INIT,
    payload: general.config
  }
}
