import React from 'react'

interface Props {
  href: string
  target?: string
  children: React.ReactNode
}

const Link = ({ children, href, target }: Props): JSX.Element => (
  <a href={href} target={target}>
    {children}
  </a>
)

export default Link
