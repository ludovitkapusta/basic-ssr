import React from 'react'
import size from 'polished/lib/shorthands/size'

import styled from '@theme/styled-components'

interface ArrowProps {
  onClick?: () => void
  topSm?: number
  topLg?: number
}

export const NextArrow = ({
  onClick,
  topLg = 50,
  topSm = 50
}: ArrowProps): JSX.Element => (
  <StyledNextArrow
    onClick={() => !!onClick && onClick()}
    topLg={topLg}
    topSm={topSm}
  >
    {`>`}
  </StyledNextArrow>
)

export const PrevArrow = ({
  onClick,
  topLg = 50,
  topSm = 50
}: ArrowProps): JSX.Element => (
  <StyledPreviousArrow
    onClick={() => !!onClick && onClick()}
    topLg={topLg}
    topSm={topSm}
  >
    {`<`}
  </StyledPreviousArrow>
)

const StyledNextArrow = styled.div<{ topSm: number; topLg: number }>`
  background: ${props => props.theme.color.grayDarker};
  color: ${props => props.theme.color.white};
  cursor: pointer;
  position: absolute;
  right: 0;
  top: ${props => props.topSm}%;
  z-index: 1;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    background: none;
    color: ${props => props.theme.color.grayDarker};
    right: 50px;
    top: ${props => props.topLg}%;
    transform: translateY(-50%);
  }

  svg {
    ${size(48)};
  }
`

const StyledPreviousArrow = styled(StyledNextArrow)<{
  topSm: number
  topLg: number
}>`
  right: auto;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    left: 50px;
  }
`
