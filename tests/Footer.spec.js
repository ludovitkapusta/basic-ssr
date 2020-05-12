import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { theme, ThemeProvider } from '../src/theme/styled-components'
import Footer from '../src/components/Footer'

import initialState from '../server/appData/footer'

import store from './store'

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
      render(
        <ThemeProvider theme={theme}>
          <Provider store={store(initialState.config)}>
            <Footer configId="footer" />
          </Provider>
        </ThemeProvider>,
        container
      )
    })
    expect(container.textContent).toBeTruthy()
  })
})
