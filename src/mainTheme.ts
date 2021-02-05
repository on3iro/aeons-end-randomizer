import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'

import Colors from 'theme/Colors'
import Typography from 'theme/Typography'

export const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  transitions: {
    // So we have `transition: none;` everywhere
    create: () => 'none',
  },
  zIndex: {
    modal: 20000,
  },
})

export const mainTheme = {
  heading: {
    fontSize: '0.938rem',
  },
  spacing: {
    unit: 8,
  },
  drawerWidth: 240,
  muiTransitions: {
    appBarShift: muiTheme.transitions.create(['margin', 'width'], {
      easing: muiTheme.transitions.easing.easeOut,
      duration: muiTheme.transitions.duration.enteringScreen,
    }),
    content: muiTheme.transitions.create('margin', {
      easing: muiTheme.transitions.easing.sharp,
      duration: muiTheme.transitions.duration.leavingScreen,
    }),
    contentShift: muiTheme.transitions.create('margin', {
      easing: muiTheme.transitions.easing.easeOut,
      duration: muiTheme.transitions.duration.enteringScreen,
    }),
  },
  typography: Typography,
  colors: Colors,
  icons: {
    nemesis: 'ra-broken-skull',
    mage: 'ra-fluffy-swirl',
    gem: 'ra-crystals',
    relic: 'ra-crystal-wand',
    spell: 'ra-scroll-unfurled',
    treasure: 'ra-diamond',
  },
}

export type TurnOrderColors = typeof mainTheme.colors.turnOrderCards
