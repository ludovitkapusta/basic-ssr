import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'

import global from './SSR'
import template from './template'
import Heading from '../src/Heading'
import ClientRenderComponent from '../src/ClientRenderComponent'

const PORT = 8080
const app = express()

app.use(express.static('dist'))

app.get('*', (request, response) => {
  const apiResponse = Promise.resolve()

  apiResponse.then(data => {
    const markup = ReactDOM.renderToString(global.Heading({}))
    return response.send(template(markup))
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
