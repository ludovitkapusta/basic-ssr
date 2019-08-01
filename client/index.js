// @ts-check
import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from '../src/GlobalStyle'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Homepage from '@routes/Homepage'

//@ts-ignore
export const initialData = window.JS_CONFIG

/** Renders React component with data as props
 * @param {React.ComponentType<{data: any}>} Element
 * @param {Object} data
 */
const render = (Element, data) => (
  <>
    <GlobalStyle />
    <Element data={data} />
  </>
)

/** Mount React component to container ID
 * @param {React.ComponentType<{data: any}>} Element
 * @param {string} containerId
 * @param {Object} data
 */
const mount = (Element, containerId, data) => {
  const getElementById = document.getElementById(containerId)
  if (getElementById) ReactDOM.hydrate(render(Element, data), getElementById)
}

mount(Header, 'headerContainer', initialData.header)
mount(Footer, 'footerContainer', initialData.footer)
mount(Homepage, 'homepageContainer', initialData.homepage)
