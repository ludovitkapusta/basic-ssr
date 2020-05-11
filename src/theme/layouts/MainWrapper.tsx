import styled from 'styled-components'

import { theme } from '@theme/styled-components'

const MainWrapper = styled.div`
  @media (min-width: ${theme.breakpoints.md}px) {
    width: ${theme.base.baseWidthMedium}px;
    margin: ${theme.utils.marginCenter};
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    width: ${theme.base.baseWidthLarge}px;
  }
`

export default MainWrapper
