import React from 'react'
import { useSelector } from 'react-redux'

import styled, { theme } from '@theme/styled-components'

import { AppState } from '@store/rootReducer'
import { HeaderState } from '@server/appData/header'
import Link from './Link'
import Navigation from './Navigation'

export interface NavigationItem {
  id: number
  title: string
  url: string
  target: string | null
  isActive: boolean
  children: NavigationItem[]
}

interface Props {
  configId: string
}

const Header = ({ configId }: Props): JSX.Element => {
  const header = useSelector(
    (state: AppState) => state[configId]
  ) as HeaderState

  return (
    <StyledHeader>
      <MainGridWrapper>
        <Link href="/">
          <img alt="homepageLogo" src={header.logo} />
        </Link>
        <Navigation items={header.mainNavigation} />
      </MainGridWrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  background: ${theme.color.gray};
  padding: 20px 0;
`

const MainGridWrapper = styled.div`
  display: grid;
  margin: ${props => props.theme.utils.marginCenter};
  width: ${props => props.theme.base.baseWidthLarge}px;

  @media (min-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: 20% 1fr;
  }
`

export default Header
