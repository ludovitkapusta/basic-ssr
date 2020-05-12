import React from 'react'
import size from 'polished/lib/shorthands/size'
import Slider, { Settings } from 'react-slick'

import styled from '@theme/styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { NextArrow, PrevArrow } from './Arrows'

interface Props {
  children: JSX.Element[]
  customSettings?: Settings
}

const ReactSlick = ({ children, customSettings }: Props): JSX.Element => {
  const settings: Settings = {
    appendDots: (dots: React.ReactNode): JSX.Element => (
      <DotWrapper>
        <DotList>{dots}</DotList>
      </DotWrapper>
    ),
    autoplay: false,
    autoplaySpeed: 5000,
    customPaging: () => <Dot />,
    dots: true,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
  }

  const extendedSettings = { ...settings, ...customSettings }

  return (
    <StyledCarousel>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...extendedSettings}>{children}</Slider>
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div<{ noBorder?: boolean }>`
  margin: 16px;

  .slick-track {
    display: flex;
  }

  .slick-slide {
    height: unset;
    margin: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    margin: 0;
  }
`

const DotWrapper = styled.div`
  &.slick-dots {
    bottom: 19px;

    li {
      ${size(12)}
    }
  }
`

const DotList = styled.ul`
  margin: 0;
  padding: 0;

  li.slick-active {
    div {
      background: ${props => props.theme.color.white};
      border: 1px solid ${props => props.theme.color.white};
    }
  }
`

const Dot = styled.div`
  ${size(12)};
  color: ${props => props.theme.color.gray};
  border: 1px solid ${props => props.theme.color.gray};
`

export default ReactSlick
