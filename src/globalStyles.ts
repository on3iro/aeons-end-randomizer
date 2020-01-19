import { createGlobalStyle } from 'styled-components'

type Props = {
  theme: any
}

export const GlobalStyles = createGlobalStyle<Props>`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    margin: 0;
    font-family: ${props => props.theme.typography.fontFamily};
    color: ${props => props.theme.colors.text.primary};
    font-weight: ${props => props.theme.typography['p'].fontWeight};
    font-size: ${props => props.theme.typography['p'].fontSize};
    line-height: ${props => props.theme.typography['p'].lineHeight};
    letter-spacing: ${props => props.theme.typography['p'].letterSpacing};
    background-color: #fafafa;
  }

  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
  }
`
