import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Heading from '@components/Heading'

import Contact from '@routes/Contact'
import Homepage from '@routes/Homepage'

/* taking care of render component and providing data from React.NET */
const render = (Element: any, { general = {}, config }: any) => (
  <>
    {/* {JSON.stringify(config)} */}
    <Element data={config} general={general} />
  </>
)

declare let global: any

global.React = React
global.ReactDOM = ReactDOM
global.ReactDOMServer = ReactDOMServer
global.Styled = { ServerStyleSheet }

global.Header = (initialProps: any) => render(Header, initialProps)
global.Footer = (initialProps: any) => render(Footer, initialProps)
global.Heading = (initialProps: any) => render(Heading, initialProps)
global.Homepage = (initialProps: any) => render(Homepage, initialProps)
global.Contact = (initialProps: any) => render(Contact, initialProps)

export default global
