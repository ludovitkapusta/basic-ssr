import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

import Heading from '../src/Heading'

/* taking care of render component and providing data from React.NET */
const render = (Element: any, { general = {}, config = {} }: any) => (
  <Element data={config} general={general} />
)

declare let global: any

global.React = React
global.ReactDOM = ReactDOM
global.ReactDOMServer = ReactDOMServer

global.Heading = (initialProps: any) => render(Heading, initialProps)

export default global
