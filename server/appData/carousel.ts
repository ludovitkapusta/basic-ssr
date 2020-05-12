import { GeneralState, KeyString } from '@store/general/types'
import general from './general'

interface CarouselItem {
  id: number
  title: string
  subTitle: string
  bannerImageUrl: string
  bannerImageAlt: string
  url: string
}

export interface CarouselState {
  componentSettings: KeyString
  carouselItems: CarouselItem[]
}

interface CarouselProps {
  general: GeneralState
  config: CarouselState
}

const carousel: CarouselProps = {
  general: general.config,
  config: {
    componentSettings: { name: 'carousel' },
    carouselItems: [
      {
        id: 1,
        title: 'Banner 1',
        subTitle: 'banner subtitle',
        bannerImageUrl: 'http://satyr.io/1920x365/red',
        bannerImageAlt: '',
        url: '#'
      },
      {
        id: 2,
        title: 'Banner 2',
        subTitle: '',
        bannerImageUrl: 'http://satyr.io/1920x365/green',
        bannerImageAlt: '',
        url: '#'
      }
    ]
  }
}

export type CarouselType = CarouselProps

export default carousel
