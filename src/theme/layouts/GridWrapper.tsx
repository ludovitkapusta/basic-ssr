import styled from 'styled-components'

import { theme } from '@theme/styled-components'

const GridWrapper = styled.div<{ cols: string }>`
  display: grid;
  grid-template-columns: ${props => props.cols};

  @media (min-width: ${theme.breakpoints.md}px) {
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
  }
`

export default GridWrapper
