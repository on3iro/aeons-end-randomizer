import { createGlobalStyle } from 'styled-components'

type Props = {
  theme: any
}

const GlobalStyles = createGlobalStyle<Props>`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    margin: 0;
    font-family: ${props => props.theme.typography.fontFamily};
    color: ${props => props.theme.colors.text.primary};
    font-weight: ${props => props.theme.typography['text'].fontWeight};
    font-size: ${props => props.theme.typography['text'].fontSize};
    line-height: ${props => props.theme.typography['text'].lineHeight};
    letter-spacing: ${props => props.theme.typography['text'].letterSpacing};
    background-color: ${props => props.theme.colors.mainBackground};
  }

  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
  }
`

export default GlobalStyles
