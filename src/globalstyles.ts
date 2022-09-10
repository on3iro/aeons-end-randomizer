import { createGlobalStyle } from 'styled-components/macro'

// @ts-ignore
import RobotoWoff2 from './fonts/Roboto/Roboto-Regular.woff2'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoWoff2}) format('woff2');
}
`

export default GlobalStyles
