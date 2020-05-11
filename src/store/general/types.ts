// eslint-disable-next-line import/prefer-default-export
export const GENERAL_INIT = 'GENERAL_INIT'

interface GeneralInitialState {
  componentSettings: KeyString
  requestVerificationToken: string
  urls: KeyString
  localizations: KeyString
}

export interface KeyString {
  [key: string]: string
}

export interface GeneralInit {
  type: typeof GENERAL_INIT
  payload: GeneralState
}

export type GeneralState = GeneralInitialState
export type GeneralActions = GeneralInit
