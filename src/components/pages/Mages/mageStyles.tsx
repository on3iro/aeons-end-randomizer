import { createStyles } from '@material-ui/core'

const mageStyles = (theme: any) =>
  createStyles({
    card: {
      position: 'relative',
      height: '100%',
    },
    cardContent: {
      position: 'relative',
      zIndex: 1,
    },
    cardIcon: {
      position: 'absolute',
      right: 8,
      bottom: -8,
      fontSize: 120,
      zIndex: 0,
      opacity: 0.2,
      color: '#E0E0E0',
    },
  })

export default mageStyles
