import React from 'react'

import 'rpg-awesome/css/rpg-awesome.min.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'

import { styles } from './appStyles'

import MainApp from './MainApp'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
})

type Props = { classes: any }

const App = React.memo(({ classes }: Props) => (
  <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <MainApp classes={classes} />
    </div>
  </MuiThemeProvider>
))

App.displayName = 'App'

export default withStyles(styles, { withTheme: true })(App)
