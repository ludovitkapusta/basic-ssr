import rem from 'polished/lib/helpers/rem'
import color from './colors'

export interface Base {
  baseFontSize: string
  baseFontColor: string
  baseWidth: number
  baseWidthLarge: number
  baseWidthMedium: number
}

const base: Base = {
  baseFontColor: color.grayDarker,
  baseFontSize: rem(16),

  baseWidth: 320,
  baseWidthLarge: 1100,
  baseWidthMedium: 640,
}

export default base
