import * as styledComponents from 'styled-components'

import { ThemeInterface } from './theme'
import base from './variables/base'
import breakpoints from './variables/breakpoints'
import color from './variables/colors'
import utils from './variables/utils'

const {
  ThemeProvider,
  createGlobalStyle,
  css,
  default: styled,
  keyframes
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>

export const theme: ThemeInterface = {
  base,
  breakpoints,
  color,
  utils
}

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
