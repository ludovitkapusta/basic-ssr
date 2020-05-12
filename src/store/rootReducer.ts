/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from 'redux'

/** Config (AppData) types */
import { CarouselState } from '@server/appData/carousel'
import { Component2State } from '@server/appData/component2'
import { Component3State } from '@server/appData/component3'
import { ContactState } from '@server/appData/contact'
import { FooterState } from '@server/appData/footer'
import { HeaderState } from '@server/appData/header'

/** Reducer types */
import { GeneralState } from './general/types'
import { generateClientReducers } from './generateReducers'

export interface AppState {
  [key: string]:
    | GeneralState
    | CarouselState
    | Component2State
    | Component3State
    | ContactState
    | FooterState
    | HeaderState
}

export default combineReducers({
  ...generateClientReducers(window.JS_CONFIG)
})
