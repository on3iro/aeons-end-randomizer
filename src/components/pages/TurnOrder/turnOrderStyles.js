const turnOrderStyles = (theme) => ({
  cardDeck: {
    marginTop: 24,
  },
  cardTable: {
    marginTop: 24,
    borderCollapse: 'collapse',
  },
  cardRow: {
    borderBottom: '4px solid #fafafa',
    '&:first-child': {
      '& *': {
        color: '#fff',
      },
    },
  },
  player1: {
    background: '#F1F8E9',
    '& td': {
      borderColor: '#F1F8E9',
    },
    '&:first-child': {
      background: '#8BC34A',
      '& td': {
        borderColor: '#8BC34A',
      },
    },
  },
  player2: {
    background: '#FFF3E0',
    '& td': {
      borderColor: '#FFF3E0',
    },
    '&:first-child': {
      background: '#FF9800',
      '& td': {
        borderColor: '#FF9800',
      },
    },
  },
  player3: {
    background: '#E3F2FD',
    '& td': {
      borderColor: '#E3F2FD',
    },
    '&:first-child': {
      background: '#2196F3',
      '& td': {
        borderColor: '#2196F3',
      },
    },
  },
  player4: {
    background: '#F3E5F5',
    '& td': {
      borderColor: '#F3E5F5',
    },
    '&:first-child': {
      background: '#9C27B0',
      '& td': {
        borderColor: '#9C27B0',
      },
    },
  },
  nemesis: {
    background: '#ffebee',
    '& td': {
      borderColor: '#ffebee',
    },
    '&:first-child': {
      background: '#f44336',
      '& td': {
        borderColor: '#f44336',
      },
    },
  },
  wild: {
    background: '#FAFAFA',
    '& td': {
      borderColor: '#FAFAFA',
    },
    '&:first-child': {
      background: '#9E9E9E',
      '& td': {
        borderColor: '#9E9E9E',
      },
    },
  },
})

export default turnOrderStyles
