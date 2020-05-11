import rem from 'polished/lib/helpers/rem'
import { createGlobalStyle } from './styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    letter-spacing: -0.4px;
    line-height: ${rem(18)};
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }
`

export default GlobalStyle
