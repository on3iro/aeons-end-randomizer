import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'

export const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
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
