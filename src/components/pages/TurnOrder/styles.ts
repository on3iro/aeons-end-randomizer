import { createStyles } from '@material-ui/core'

const turnOrderStyles = (theme: any) =>
  createStyles({
    cardDeck: {
      marginTop: 24,
    },
    cardTable: {
      marginTop: 24,
      borderCollapse: 'collapse',
    },
    cardRow: {
      '&:first-child': {
        '& *': {
          color: '#fff',
        },
      },
    },
    setupCard: {
      marginTop: 24,
    },
    player1: {
      background: '#F1F8E9',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: '#8BC34A',
      },
    },
    player2: {
      background: '#FFF3E0',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: '#FF9800',
      },
    },
    player3: {
      background: '#E3F2FD',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: '#2196F3',
      },
    },
    player4: {
      background: '#F3E5F5',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: '#9C27B0',
      },
    },
    player12: {
      background: 'linear-gradient(135deg, #F1F8E9 0%, #F1F8E9 50%, #FFF3E0 50%, #FFF3E0 100%)',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: 'linear-gradient(135deg, #8BC34A 0%, #8BC34A 50%, #FF9800 50%, #FF9800 100%)',
      },
    },
    player34: {
      background: 'linear-gradient(135deg, #E3F2FD 0%, #E3F2FD 50%, #F3E5F5 50%, #F3E5F5 100%)',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: 'linear-gradient(135deg, #2196F3 0%, #2196F3 50%, #9C27B0 50%, #9C27B0 100%)',
      },
    },
    nemesis: {
      background: '#ffebee',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: '#f44336',
      },
    },
    wild: {
      background: '#FAFAFA',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: '#9E9E9E',
      },
    },
    'wild-token': {
      background: 'linear-gradient(135deg, #F1F8E9 0%, #F1F8E9 33%, #FFF3E0 33%, #FFF3E0 66%, #E3F2FD 66%, #E3F2FD 100%)',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: 'linear-gradient(135deg, #8BC34A 0%, #8BC34A 33%, #FF9800 33%, #FF9800 66%, #2196F3 66%, #2196F3 100%)',
      },
    },
    maelstrom: {
      background: '#EFEBE9',
      '& td': {
        borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: '#795548',
      },
    },
    blitz: {
      background: '#ECEFF1',
        '& td': {
          borderBottom: '4px solid #fafafa',
      },
      '&:first-child': {
        background: '#607D8B',
      },
    },
  })

export default turnOrderStyles
