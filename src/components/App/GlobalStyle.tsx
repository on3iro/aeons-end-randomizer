import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  *,
  ::after, 
  ::before {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
