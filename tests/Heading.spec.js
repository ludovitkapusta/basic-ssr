import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Heading from '../src/widgets/Heading'

import { component2 } from '../server/appData'

/** @type {HTMLDivElement | Element} */
let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
})

describe('User component', () => {
  test('Will render Heading widget', () => {
    act(() => {
      render(<Heading data={component2.config} />, container)
    })
    expect(container.textContent).toBeTruthy()
  })
})
