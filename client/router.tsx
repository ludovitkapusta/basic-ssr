import React from 'react'

// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    component: (
      <>
        <div data-config-id="header" data-widget-id="Header" />
        <div data-config-id="carousel" data-widget-id="Carousel" />
        <div data-config-id="component2" data-widget-id="Heading" />
        <div data-config-id="component3" data-widget-id="Heading" />
        <div data-config-id="footer" data-widget-id="Footer" />
      </>
    ),
    path: '/',
  },
  {
    component: (
      <>
        <div data-config-id="header" data-widget-id="Header" />
        <div data-config-id="contact" data-widget-id="Contact" />
        <div data-config-id="footer" data-widget-id="Footer" />
      </>
    ),
    path: '/contact',
  },
]
