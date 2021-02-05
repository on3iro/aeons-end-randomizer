const GreyColors = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161',
}

const PrimaryColors = {
  light: '#64b5f6',
  main: '#2196f3',
  dark: '#1976d2',
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6', // light
  400: '#42a5f5',
  500: '#2196f3', // main
  600: '#1e88e5',
  700: '#1976d2', // dark
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff',
}

const SecondaryColors = {
  light: '#ff4081',
  main: '#f50057',
  dark: '#c51162',
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081', // light
  A400: '#f50057', // main
  A700: '#c51162', // dark
}

const PlayerColors = {
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

const TreasureColors = {
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

const Colors = {
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
  },
  background: {
    default: '#fafafa',
    paper: '#fff',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  error: {
    contrastText: '#fff',
    dark: '#d32f2f',
    light: '#e57373',
    main: '#f44336',
  },
  grey: GreyColors,
  primary: PrimaryColors,
  secondary: SecondaryColors,
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  black: '#000',
  white: '#fff',
  PlayerColors,
  turnOrderCards: {
    ...PlayerColors,
    player12: {
      normal: `linear-gradient(135deg, ${PlayerColors.player1.normal} 0%, ${PlayerColors.player1.normal} 50%, ${PlayerColors.player2.normal} 50%, ${PlayerColors.player2.normal} 100%)`,
      light: `linear-gradient(135deg, ${PlayerColors.player1.light} 0%, ${PlayerColors.player1.light} 50%, ${PlayerColors.player2.light} 50%, ${PlayerColors.player2.light} 100%)`,
    },
    player34: {
      normal: `linear-gradient(135deg, ${PlayerColors.player3.normal} 0%, ${PlayerColors.player3.normal} 50%, ${PlayerColors.player4.normal} 50%, ${PlayerColors.player4.normal} 100%)`,
      light: `linear-gradient(135deg, ${PlayerColors.player3.light} 0%, ${PlayerColors.player3.light} 50%, ${PlayerColors.player4.light} 50%, ${PlayerColors.player4.light} 100%)`,
    },
    wild: {
      normal: '#9E9E9E',
      light: '#FAFAFA',
    },
    'wild-token': {
      normal: `linear-gradient(135deg, ${PlayerColors.player1.normal} 0%, ${PlayerColors.player1.normal} 33%, ${PlayerColors.player2.normal} 33%, ${PlayerColors.player2.normal} 66%, ${PlayerColors.player3.normal} 66%, ${PlayerColors.player3.normal} 100%)`,
      light: `linear-gradient(135deg, ${PlayerColors.player1.light} 0%, ${PlayerColors.player1.light} 33%, ${PlayerColors.player2.light} 33%, ${PlayerColors.player2.light} 66%, ${PlayerColors.player3.light} 66%, ${PlayerColors.player3.light} 100%)`,
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
  },
  cards: {
    ...TreasureColors,
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
}

export default Colors
