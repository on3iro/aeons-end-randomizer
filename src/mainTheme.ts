import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

export const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
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
    fontSize: muiTheme.typography.pxToRem(15),
  },
  spacing: muiTheme.spacing,
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
  colors: {
    primary: muiTheme.palette.primary,
    secondary: muiTheme.palette.secondary,
    text: muiTheme.palette.text,
    white: '#fff',
  },
  icons: {
    nemesis: 'ra-broken-skull',
    mage: 'ra-fluffy-swirl',
    gem: 'ra-crystals',
    relic: 'ra-crystal-wand',
    spell: 'ra-scroll-unfurled',
    treasure: 'ra-diamond',
  },
}
