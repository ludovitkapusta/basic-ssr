import { Base } from './variables/base'
import { Breakpoints } from './variables/breakpoints'
import { Color } from './variables/colors'
import { Utils } from './variables/utils'

export interface ThemeInterface {
  base: Base
  breakpoints: Breakpoints
  color: Color
  utils: Utils
}
