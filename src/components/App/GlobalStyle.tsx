import { createGlobalStyle } from 'styled-components/macro'

type Props = {
  theme: any
}

const GlobalStyle = createGlobalStyle<Props>`
  *,
  ::after, 
  ::before {
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.fontSize};
    font-weight: ${(props) => props.theme.typography.fontWeightRegular};
    line-height: ${(props) => props.theme.typography.lineHeight};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.background.default};
    color: ${(props) => props.theme.colors.text.primary};
  }
`

export default GlobalStyle
