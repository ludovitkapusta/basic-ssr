import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Header from '../src/components/Header'

import { header } from '../server/appData'

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

describe('Header component', () => {
  test('Will render footer', () => {
    act(() => {
      render(<Header data={header.config} />, container)
    })
    expect(container.textContent).toBeTruthy()
  })
})
