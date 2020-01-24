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

export const Colors = {
  primary: {
    light: '#64b5f6', // 300
    main: '#2196f3', // 500
    dark: '#1976d2', // 700
  },
  secondary: {
    light: '#ff4081', // A200
    main: '#f50057', // A400
    dark: '#c51162', // A700
    A400: 'rgb(245, 0, 87)',
  },
  white: '#ffffff',
  black: '#000000',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
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
  },
  cards: {
    ...treasureColors,
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
  mainBackground: '#fafafa',
}
