import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { ThemeProvider, theme } from '@theme/styled-components'
import StaticRouterProvider from './staticRouterProvider'

import template from './template'

const PORT = 8080
const app = express()

app.use(express.static('assets/local'))

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet()

  const markup = ReactDOM.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>
        <StaticRouterProvider location={req.url} />
      </ThemeProvider>
    </StyleSheetManager>
  )

  const styleTags = sheet.getStyleTags()

  return res.send(template(markup, styleTags))
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`)
})
