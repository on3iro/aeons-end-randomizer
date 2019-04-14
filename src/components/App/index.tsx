import React from 'react'
import { ThemeProvider } from 'styled-components/macro'

import 'rpg-awesome/css/rpg-awesome.min.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { mainTheme, muiTheme } from '../../mainTheme'

import MainApp from './MainApp'
import Wrapper from './Wrapper'

type Props = { classes: any }

const App = React.memo(() => (
  <ThemeProvider theme={mainTheme}>
    <MuiThemeProvider theme={muiTheme}>
      <Wrapper>
        <CssBaseline />
        <MainApp />
      </Wrapper>
    </MuiThemeProvider>
  </ThemeProvider>
))

App.displayName = 'App'

export default App
