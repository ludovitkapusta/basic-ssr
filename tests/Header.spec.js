import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { theme, ThemeProvider } from '../src/theme/styled-components'
import Header from '../src/components/header'

import initialState from '../server/appData/header'
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

describe('Header component', () => {
  test('Will render header', () => {
    act(() => {
      render(
        <ThemeProvider theme={theme}>
          <Provider store={store(initialState.config)}>
            <Header configId="header" />
          </Provider>
        </ThemeProvider>,
        container
      )
    })
    expect(container.textContent).toBeTruthy()
  })
})
