import React from 'react'
import { Route, StaticRouter, Switch } from 'react-router-dom'

import { header, footer, contact, component2, component3 } from './appData'
import global from './SSR'

interface Props {
  location: string
}

const StaticRouterProvider = ({ location }: Props): JSX.Element => (
  <StaticRouter context={{}} location={location}>
    <Switch>
      <Route
        component={() => (
          <>
            <div data-config-id="header" data-widget-id="Header">
              {global.Header(header)}
            </div>
            <div data-config-id="component2" data-widget-id="Heading">
              {global.Component2(component2)}
            </div>
            <div data-config-id="component3" data-widget-id="Heading">
              {global.Component3(component3)}
            </div>
            <div data-config-id="footer" data-widget-id="Footer">
              {global.Footer(footer)}
            </div>
          </>
        )}
        exact
        path="/"
      />
      <Route
        component={() => (
          <>
            <div data-config-id="header" data-widget-id="Header">
              {global.Header(header)}
            </div>
            <div data-config-id="contact" data-widget-id="Contact">
              {global.Contact(contact)}
            </div>
            <div data-config-id="footer" data-widget-id="Footer">
              {global.Footer(footer)}
            </div>
          </>
        )}
        exact
        path="/contact"
      />
    </Switch>
  </StaticRouter>
)

export default StaticRouterProvider
