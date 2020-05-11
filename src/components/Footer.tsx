import React from 'react'
import { rem } from 'polished'
import { useSelector } from 'react-redux'

import styled, { theme } from '@theme/styled-components'

import MainGridWrapper from '@theme/layouts/MainGridWrapper'
import { AppState } from '@store/rootReducer'
import { FooterState } from '@server/appData/footer'

interface PrimaryNavigation {
  id: number
  title: string
  url: string
  target: string | null
  children: PrimaryNavigation[]
}

interface Props {
  configId: string
}

const Footer = ({ configId }: Props): JSX.Element => {
  const footer = useSelector(
    (state: AppState) => state[configId]
  ) as FooterState

  const { primaryNavigation } = footer

  return (
    <StyledFooter>
      <MainGridWrapper
        lgCols={`repeat(${primaryNavigation.length}, 1fr)`}
        mdCols={`repeat(${primaryNavigation.length / 2}, 1fr)`}
      >
        {primaryNavigation?.map((col: PrimaryNavigation) => (
          <div key={col.id}>
            <strong>{col.title}</strong>
            <ul>
              {col &&
                col.children.map((child: PrimaryNavigation) => (
                  <li key={child.id}>
                    <a href={child.url} target={child.target || ''}>
                      {child.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </MainGridWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  background: ${theme.color.black};
  color: ${theme.color.white};
  font-size: ${rem(22)};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 15px;

    li {
      a {
        color: ${theme.color.footerLinkColor};
      }
    }
  }

  ${MainGridWrapper} {
    display: grid;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    font-size: ${rem(15)};

    ul {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    padding: 20px 0;
  }
`

export default Footer
