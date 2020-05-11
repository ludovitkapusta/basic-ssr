import React from 'react'
import Slider, { Settings } from 'react-slick'
import { useSelector } from 'react-redux'
import size from 'polished/lib/shorthands/size'

import styled, { theme } from '@theme/styled-components'

import { CarouselState } from '@server/appData/carousel'
import { AppState } from '@store/rootReducer'
import { Link } from '@components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ArrowProps {
  onClick?: () => void
}

interface Props {
  configId: string
}

const NextArrow = (props: ArrowProps): JSX.Element => {
  const { onClick } = props
  return <StyledNextArrow onClick={onClick}>{`<`}</StyledNextArrow>
}

const PrevArrow = (props: ArrowProps): JSX.Element => {
  const { onClick } = props
  return <StyledPreviousArrow onClick={onClick}>{`<`}</StyledPreviousArrow>
}

const Carousel = ({ configId }: Props): JSX.Element => {
  const carousel = useSelector(
    (state: AppState) => state[configId]
  ) as CarouselState

  const { carouselItems } = carousel

  const settings: Settings = {
    appendDots: (dots: React.ReactNode): JSX.Element => (
      <DotWrapper>
        <DotList>{dots}</DotList>
      </DotWrapper>
    ),
    autoplay: true,
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

  const {
    appendDots,
    autoplay,
    autoplaySpeed,
    customPaging,
    dots,
    infinite,
    nextArrow,
    prevArrow,
    slidesToScroll,
    slidesToShow,
    speed
  } = settings

  return (
    <Slider
      appendDots={appendDots}
      autoplay={autoplay}
      autoplaySpeed={autoplaySpeed}
      customPaging={customPaging}
      dots={dots}
      infinite={infinite}
      nextArrow={nextArrow}
      prevArrow={prevArrow}
      slidesToScroll={slidesToScroll}
      slidesToShow={slidesToShow}
      speed={speed}
    >
      {carouselItems.map(item => (
        <Slide key={item.id}>
          <Link href={item.url} target="_blank">
            <>
              <img alt={item.bannerImageAlt} src={item.bannerImageUrl} />
              <TextOverlay>
                {item.title && <Headline>{item.title}</Headline>}
                {item.subTitle && <Subline>{item.subTitle}</Subline>}
              </TextOverlay>
            </>
          </Link>
        </Slide>
      ))}
    </Slider>
  )
}

const StyledNextArrow = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  top: 50%;
`

const StyledPreviousArrow = styled(StyledNextArrow)`
  right: 0;
  transform: scaleX(-1);
`

const Slide = styled.div`
  position: relative;
`

const DotWrapper = styled.div`
  &.slick-dots {
    bottom: 19px;

    li {
      ${size(15)}
    }
  }
`

const DotList = styled.ul`
  margin: 0;
  padding: 0;

  li.slick-active div {
    background: white;
  }
`

const Dot = styled.div`
  ${size(15)};
  color: white;
  border: 1px white solid;
  border-radius: 50%;
`

const TextOverlay = styled.div`
  color: ${theme.color.white};
  position: absolute;
  bottom: 50px;
  width: 500px;
  margin: 0 auto;
  left: calc(50% - (${theme.base.baseWidth}px / 2));
`

const Headline = styled.p`
  font-size: 55px;
  letter-spacing: -1.3px;
  line-height: 55px;
`

const Subline = styled.p`
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 18px;
`

export default Carousel
