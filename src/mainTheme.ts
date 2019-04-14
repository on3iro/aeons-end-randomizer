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
    turnOrderCards: {
      ...playerColors,
      player12: {
        normal: `linear-gradient(135deg, ${playerColors.player1.normal} 0%, ${
          playerColors.player1.normal
        } 50%, ${playerColors.player2.normal} 50%, ${
          playerColors.player2.normal
        } 100%)`,
        light: `linear-gradient(135deg, ${playerColors.player1.light} 0%, ${
          playerColors.player1.light
        } 50%, ${playerColors.player2.light} 50%, ${
          playerColors.player2.light
        } 100%)`,
      },
      player34: {
        normal: `linear-gradient(135deg, ${playerColors.player3.normal} 0%, ${
          playerColors.player3.normal
        } 50%, ${playerColors.player4.normal} 50%, ${
          playerColors.player4.normal
        } 100%)`,
        light: `linear-gradient(135deg, ${playerColors.player3.light} 0%, ${
          playerColors.player3.light
        } 50%, ${playerColors.player4.light} 50%, ${
          playerColors.player4.light
        } 100%)`,
      },
      wild: {
        normal: '#9E9E9E',
        light: '#FAFAFA',
      },
      'wild-token': {
        normal: `linear-gradient(135deg, ${playerColors.player1.normal} 0%, ${
          playerColors.player1.normal
        } 33%, ${playerColors.player2.normal} 33%, ${
          playerColors.player2.normal
        } 66%, ${playerColors.player3.normal} 66%, ${
          playerColors.player3.normal
        } 100%)`,
        light: `linear-gradient(135deg, ${playerColors.player1.light} 0%, ${
          playerColors.player1.light
        } 33%, ${playerColors.player2.light} 33%, ${
          playerColors.player2.light
        } 66%, ${playerColors.player3.light} 66%, ${
          playerColors.player3.light
        } 100%)`,
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
    },
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
      nemesis: {
        color: '#E0E0E0',
      },
      mage: {
        color: '#E0E0E0',
      },
    },
  },
}

export type TurnOrderColors = typeof mainTheme.colors.turnOrderCards
