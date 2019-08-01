import React from 'react'
import { Route, StaticRouter, Switch } from 'react-router-dom'

import { appData } from './appData'
import global from './SSR'

interface IProps {
  location: string
}

const StaticRouterProvider = ({ location }: IProps) => (
  <StaticRouter context={{}} location={location}>
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <div id="homepageContainer">{global.Homepage(appData.homepage)}</div>
        )}
      />
      <Route
        exact
        path="/en"
        component={() => (
          <div id="homepageContainer">{global.Homepage(appData.homepage)}</div>
        )}
      />
      <Route
        exact
        path="/en/contact"
        component={() => (
          <div id="contactContainer">{global.Contact(appData.contact)}</div>
        )}
      />
    </Switch>
  </StaticRouter>
)

export default StaticRouterProvider
