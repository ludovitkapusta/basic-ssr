import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import StaticRouterProvider from './staticRouterProvider'

import global from './SSR'
import template from './template'
import { appData } from './appData'
import GlobalStyle from '../src/GlobalStyle'

const PORT = 8080
const app = express()

app.use(express.static('assets/local'))

app.get('*', (request, response) => {
  const apiResponse = Promise.resolve()

  apiResponse.then(data => {
    const sheet = new ServerStyleSheet()
    const markup = ReactDOM.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <>
          <GlobalStyle />
          <>
            <div id="headerContainer">{global.Header(appData.header)}</div>
            <StaticRouterProvider location={request.url} />
            <div id="footerContainer">{global.Footer(appData.footer)}</div>
          </>
        </>
      </StyleSheetManager>
    )

    const styleTags = sheet.getStyleTags()

    return response.send(template(data, markup, styleTags))
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
