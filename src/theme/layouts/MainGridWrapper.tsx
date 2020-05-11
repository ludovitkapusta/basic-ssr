import styled from 'styled-components'

import { theme } from '@theme/styled-components'

import MainWrapper from './MainWrapper'

const MainGridWrapper = styled(MainWrapper)<{
  lgCols?: string
  mdCols?: string
  smCols?: string
}>`
  display: grid;
  grid-template-columns: ${props => props.smCols};

  @media (min-width: ${theme.breakpoints.md}px) {
    grid-template-columns: ${props => props.mdCols};
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: ${props => props.lgCols};
  }
`

export default MainGridWrapper
