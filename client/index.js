import React from 'react'
import ReactDOM from 'react-dom'

import Heading from '../src/Heading'
import ClientRenderComponent from '../src/ClientRenderComponent'

ReactDOM.hydrate(
  <ClientRenderComponent />,
  document.getElementById('clientRenderContainer')
)

// ReactDOM.hydrate(
//   <ClientRenderComponent />,
//   document.getElementById('clientRenderContainer')
// )
