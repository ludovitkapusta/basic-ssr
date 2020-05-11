/* eslint-disable @typescript-eslint/no-explicit-any */
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { theme, ThemeProvider } from '@theme/styled-components'

import store from '@store/store'
import Heading from '@widgets/Heading'
import Contact from '@widgets/Contact'
import { Header, Footer, Carousel } from '@components'
import { router } from './router'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    JS_CONFIG: any
  }
}

/** Renders React component with data as props */
const render = (
  Element: React.ComponentType<{ configId: string }>,
  configId: any
): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Element configId={configId} />
    </Provider>
  </ThemeProvider>
)

/** Hydrates React component to container */
const hydrate = (
  Element: React.ComponentType<{ configId: string }>,
  container: Element | null,
  configId: string
): void => ReactDOM.hydrate(render(Element, configId), container)

/** Mounts selected widget by name */
const mountWidget = (Element: any, widgetName: string): void => {
  const cointainers = document.querySelectorAll(
    `[data-widget-id="${widgetName}"]`
  )

  if (!cointainers.length) return

  const widgetCointainersArray = Array.prototype.slice.call(cointainers)
  widgetCointainersArray.forEach((widget: HTMLElement): any => {
    const { configId } = widget.dataset
    if (!configId) return

    hydrate(Element, widget, configId)
  })
}

// eslint-disable-next-line no-undef
if (!isPRODUCTION) {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {router.map(route => (
            <Route
              component={() => route.component}
              exact
              key={route.path}
              path={route.path}
            />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>,
    document.getElementById('app')
  )
}

mountWidget(Header, 'Header')
mountWidget(Footer, 'Footer')
mountWidget(Carousel, 'Carousel')
mountWidget(Contact, 'Contact')
mountWidget(Heading, 'Heading')
