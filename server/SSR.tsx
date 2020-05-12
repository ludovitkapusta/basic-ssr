/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { theme, ThemeProvider } from '@theme/styled-components'
import { ServerStyleSheet } from 'styled-components'

import Heading from '@widgets/Heading'
import {
  generateSSRreducer,
  combinedSSRInitialState
} from '@store/generateReducers'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Contact from '@widgets/Contact'
import Carousel from '@widgets/Carousel'
import { AppDataType } from './appData'

/* taking care of render component and providing data from React.NET */
const render = (
  Element: any,
  { config, general }: AppDataType
): JSX.Element => {
  const rootReducer = combineReducers({
    ...generateSSRreducer(config),
    general: (state: any = general): any => state
  })

  const store = createStore(rootReducer, combinedSSRInitialState(config))

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Element configId={config.componentSettings.name} />
      </Provider>
    </ThemeProvider>
  )
}

declare const global: any

global.React = React
global.ReactDOM = ReactDOM
global.ReactDOMServer = ReactDOMServer
global.Styled = { ServerStyleSheet }

global.Header = (initialProps: AppDataType) => render(Header, initialProps)
global.Footer = (initialProps: AppDataType) => render(Footer, initialProps)
global.Heading = (initialProps: AppDataType) => render(Heading, initialProps)
global.Component2 = (initialProps: AppDataType) => render(Heading, initialProps)
global.Component3 = (initialProps: AppDataType) => render(Heading, initialProps)
global.Contact = (initialProps: AppDataType) => render(Contact, initialProps)
global.Carousel = (initialProps: AppDataType) => render(Carousel, initialProps)

export default global
