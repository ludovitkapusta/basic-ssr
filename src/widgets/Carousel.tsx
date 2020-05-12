import React from 'react'
import { useSelector } from 'react-redux'
import loadable from '@loadable/component'

import styled, { theme } from '@theme/styled-components'

import { CarouselState } from '@server/appData/carousel'
import { AppState } from '@store/rootReducer'
import Link from '@components/Link'
import { NextArrow, PrevArrow } from '@components/ReactSlick/Arrows'

const ReactSlick = loadable(() => import('@components/ReactSlick'))

interface Props {
  configId: string
}

const Carousel = ({ configId }: Props): JSX.Element => {
  const carousel = useSelector(
    (state: AppState) => state[configId]
  ) as CarouselState

  const { carouselItems } = carousel

  return (
    <StyledCarousel>
      <ReactSlick
        customSettings={{
          nextArrow: <NextArrow topSm={17} />,
          prevArrow: <PrevArrow topSm={17} />
        }}
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
      </ReactSlick>
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div`
  margin: 32px auto 0;
  min-height: 200px;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    margin: 0 auto;
    min-height: 500px;
  }
`

const Slide = styled.div`
  position: relative;
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
