import React from 'react'
import { ThemeProvider } from 'styled-components/macro'

import 'rpg-awesome/css/rpg-awesome.min.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'

import { styles } from './appStyles'

import MainApp from './MainApp'

const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
})

const mainTheme = {
  colors: {
    primary: muiTheme.palette.primary,
    secondary: muiTheme.palette.secondary,
    text: muiTheme.palette.text,
    cards: {
      gem: {
        color: '#B39DDB',
        background: '#EDE7F6',
      },
      relic: {
        color: '#90CAF9',
        background: '#E3F2FD',
      },
      spell: {
        color: '#FFCC80',
        background: '#FFF3E0',
      },
    },
  },
}

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
