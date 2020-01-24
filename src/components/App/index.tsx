import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { BrowserRouter as Router } from 'react-router-dom'

import 'rpg-awesome/css/rpg-awesome.min.css'

import { MuiThemeProvider } from '@material-ui/core/styles'

import { muiTheme } from '../../muiTheme'

import GlobalStyles from 'globalStyles'
import mainTheme from 'themes/main'

import MainApp from './MainApp'
import Wrapper from './Wrapper'

const App = React.memo(() => (
  <ThemeProvider theme={mainTheme}>
    <MuiThemeProvider theme={muiTheme}>
      <Router>
        <Wrapper>
          <GlobalStyles />
          <MainApp />
        </Wrapper>
      </Router>
    </MuiThemeProvider>
  </ThemeProvider>
))

App.displayName = 'App'

export default App
