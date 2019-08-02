import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

import { IThemeInterface } from './theme'
import { base } from './variables/base'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>

export const theme: IThemeInterface = {
  base
}

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
