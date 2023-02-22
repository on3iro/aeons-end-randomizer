import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import { keyframes } from 'styled-components/macro'

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

const playerColors = {
  player1: {
    normal: '#8BC34A',
    light: '#F1F8E9',
  },
  player2: {
    normal: '#FF9800',
    light: '#FFF3E0',
  },
  player3: {
    normal: '#2196F3',
    light: '#E3F2FD',
  },
  player4: {
    normal: '#9C27B0',
    light: '#F3E5F5',
  },
  default: {
    normal: '#333',
    ligth: '#999',
  },
}

const treasureColors = {
  treasure1: {
    normal: '#a97142',
    light: '#ffddb2',
  },
  treasure2: {
    normal: '#aaa9ad',
    light: '#ece8f5',
  },
  treasure3: {
    normal: '#d4af37',
    light: '#fbecbb',
  },
}

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
    playerColors,
    turnOrderCards: {
      ...playerColors,
      player12: {
        normal: `linear-gradient(135deg, ${playerColors.player1.normal} 0%, ${playerColors.player1.normal} 50%, ${playerColors.player2.normal} 50%, ${playerColors.player2.normal} 100%)`,
        light: `linear-gradient(135deg, ${playerColors.player1.light} 0%, ${playerColors.player1.light} 50%, ${playerColors.player2.light} 50%, ${playerColors.player2.light} 100%)`,
      },
      player34: {
        normal: `linear-gradient(135deg, ${playerColors.player3.normal} 0%, ${playerColors.player3.normal} 50%, ${playerColors.player4.normal} 50%, ${playerColors.player4.normal} 100%)`,
        light: `linear-gradient(135deg, ${playerColors.player3.light} 0%, ${playerColors.player3.light} 50%, ${playerColors.player4.light} 50%, ${playerColors.player4.light} 100%)`,
      },
      wild: {
        normal: '#9E9E9E',
        light: '#FAFAFA',
      },
      'wild-token': {
        normal: `linear-gradient(135deg, ${playerColors.player1.normal} 0%, ${playerColors.player1.normal} 33%, ${playerColors.player2.normal} 33%, ${playerColors.player2.normal} 66%, ${playerColors.player3.normal} 66%, ${playerColors.player3.normal} 100%)`,
        light: `linear-gradient(135deg, ${playerColors.player1.light} 0%, ${playerColors.player1.light} 33%, ${playerColors.player2.light} 33%, ${playerColors.player2.light} 66%, ${playerColors.player3.light} 66%, ${playerColors.player3.light} 100%)`,
      },
      nemesis: {
        normal: '#f44336',
        light: '#ffebee',
      },
      maelstrom: {
        normal: '#795548',
        light: '#EFEBE9',
      },
      blitz: {
        normal: '#607D8B',
        light: '#ECEFF1',
      },
      'thief-of-dreams': {
        normal: '#192A56',
        light: '#D6DFEB',
      },
      myth: {
        normal: '#473570',
        light: '#A39AB7',
      },
      bone: {
        normal: '#5B5B5B',
        light: '#AEAEAE',
      },
    },
    cards: {
      ...treasureColors,
      any: {
        color: '#ecf0f1',
        background: '#ecf0f1',
      },
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
      nemesis: {
        color: '#E0E0E0',
      },
      mage: {
        color: '#E0E0E0',
      },
    },
    keywordBg: 'rgba(0,0,0,0.1)',
  },
  icons: {
    nemesis: 'ra-broken-skull',
    mage: 'ra-fluffy-swirl',
    gem: 'ra-crystals',
    relic: 'ra-crystal-wand',
    spell: 'ra-scroll-unfurled',
    treasure: 'ra-diamond',
  },
  snackbar: {
    success: {
      color: '#ffffff',
      bg: '#8BC34A',
    },
    error: {
      color: '#ffffff',
      bg: '#da0000',
    },
    default: {
      color: '#ffffff',
      bg: '#2196f3',
    },
  },
}

export type TurnOrderColors = typeof mainTheme.colors.turnOrderCards

// Animation

type FadeInOut = {
  topStart?: string
  topEnd?: string
  leftStart?: string
  leftEnd?: string
  bottomStart?: string
  bottomEnd?: string
}

export const fadeIn = (props: FadeInOut) => {
  return keyframes`
    0% {
      ${props.topStart && `top: ${props.topStart};`}
      ${props.leftStart && `left: ${props.leftStart};`}
      ${props.bottomStart && `bottom: ${props.bottomStart};`}
      opacity: 0;
    }

    100% {
      ${props.topEnd && `top: ${props.topEnd};`}
      ${props.leftEnd && `left: ${props.leftEnd};`}
      ${props.bottomEnd && `bottom: ${props.bottomEnd};`}
      opacity: 1;
    }
  `
}

export const fadeOut = (props: FadeInOut) => {
  return keyframes`
    100% {
      ${props.topStart && `top: ${props.topStart};`}
      ${props.leftStart && `left: ${props.leftStart};`}
      ${props.bottomStart && `bottom: ${props.bottomStart};`}
      opacity: 1;
    }

    0% {
      ${props.topEnd && `top: ${props.topEnd};`}
      ${props.leftEnd && `left: ${props.leftEnd};`}
      ${props.bottomEnd && `bottom: ${props.bottomEnd};`}
      opacity: 0;
    }
  `
}
