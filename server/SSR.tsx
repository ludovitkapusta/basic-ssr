import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

import Heading from '../src/Heading'

declare let global: any

global.React = React
global.ReactDOM = ReactDOM
global.ReactDOMServer = ReactDOMServer

global.Heading = Heading

export default global
