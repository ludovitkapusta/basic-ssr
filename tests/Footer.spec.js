import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Footer from '../src/components/Footer'

import { footer } from '../server/appData'

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

describe('Footer component', () => {
  test('Will render footer', () => {
    act(() => {
      render(<Footer data={footer.config} />, container)
    })
    expect(container.textContent).toBeTruthy()
  })
})
