import React from 'react'
import { ThemeProvider } from 'styled-components/macro'

import GlobalStyle from '../src/components/App/GlobalStyle'
import { mainTheme } from '../src/mainTheme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
