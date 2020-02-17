import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { BrowserRouter as Router } from 'react-router-dom'

import 'rpg-awesome/css/rpg-awesome.min.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { mainTheme, muiTheme } from '../../mainTheme'

import MainApp from './MainApp'
import Wrapper from './Wrapper'

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <MuiThemeProvider theme={muiTheme}>
      <Router>
        <Wrapper>
          <CssBaseline />
          <MainApp />
        </Wrapper>
      </Router>
    </MuiThemeProvider>
  </ThemeProvider>
)

export default React.memo(App)
