import React from 'react'
import { rem, border } from 'polished'

import styled, { css, theme } from '@theme/styled-components'

import { NavigationItem } from './Header'

interface Props {
  items: NavigationItem[]
}

const subMenu = (item: NavigationItem): React.ReactNode => {
  if (item.children.length > 0) {
    return (
      <SubMenu>
        {item.children.map(submenu => (
          <li key={submenu.id}>
            <a href={submenu.url} target={submenu.target || ''}>
              {submenu.title}
              {submenu.children.length > 0 && '>'}
            </a>
            {submenu.children && subMenu(submenu)}
          </li>
        ))}
      </SubMenu>
    )
  }
  return <></>
}

const Navigation = ({ items }: Props): JSX.Element => (
  <StyledNavigation>
    {items.map(item => (
      <MenuItem key={item.id}>
        <Link
          href={item.url}
          isActive={item.isActive}
          target={item.target || ''}
        >
          {item.title}
        </Link>
        {subMenu(item)}
      </MenuItem>
    ))}
  </StyledNavigation>
)

const StyledNavigation = styled.ul`
  display: none;

  @media (min-width: ${theme.breakpoints.md}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: end;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

const MenuItem = styled.li`
  position: relative;

  &:hover {
    > ul {
      display: block;
    }
  }
`

const Link = styled.a<{ isActive: boolean }>`
  color: ${theme.color.mainMenuLinkColor};
  line-height: 1rem;
  margin-right: 30px;
  padding-bottom: 2px;
  text-decoration: none;

  ${props =>
    props.isActive &&
    css`
      ${border('bottom', '2px', 'solid', theme.color.mainMenuLinkColor)}
    `}

  &:hover {
    ${border('bottom', '2px', 'solid', theme.color.mainMenuLinkColor)}
    cursor: pointer;
  }
`

const SubMenu = styled.ul`
  background: ${theme.color.white};
  display: none;
  list-style: none;
  padding: 0;
  position: absolute;
  z-index: 1000;

  li {
    font-size: ${rem(14)};
    letter-spacing: ${rem(-0.4)};
    position: relative;

    > ul {
      left: 100%;
      margin: 0;
      top: 0;
    }

    a {
      color: ${theme.color.mainMenuLinkColor};
      display: flex;
      justify-content: space-between;
      line-height: rem('22px');
      padding: 0 20px;
      text-decoration: none;
    }

    &:hover {
      background: ${theme.color.white};
      color: ${theme.color.mainMenuLinkColor};

      ul {
        display: block;
      }
    }
  }
`

export default Navigation
