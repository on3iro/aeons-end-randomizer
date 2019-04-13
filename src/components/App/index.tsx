import React from 'react'
import { ThemeProvider } from 'styled-components/macro'

import 'rpg-awesome/css/rpg-awesome.min.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'

import { mainTheme, muiTheme } from '../../mainTheme'
import { styles } from './appStyles'

import MainApp from './MainApp'

type Props = { classes: any }

const App = React.memo(({ classes }: Props) => (
  <ThemeProvider theme={mainTheme}>
    <MuiThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <MainApp classes={classes} />
      </div>
    </MuiThemeProvider>
  </ThemeProvider>
))

App.displayName = 'App'

export default withStyles(styles, { withTheme: true })(App)
