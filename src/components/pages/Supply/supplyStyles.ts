import { createStyles } from '@material-ui/core'

const supplyStyles = (theme: any) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flex: '1 1 auto',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    card: {
      minWidth: 30,
      minHeight: 148,
      position: 'relative',
      height: '100%',
    },
    cardContent: {
      position: 'relative',
      zIndex: 1,
    },
    cardName: {
      fontWeight: 'bold',
    },
    cardInfoListItem: {
      padding: 0,
    },
    label: {
      marginRight: 8,
      display: 'inline-block',
    },
    infoText: {
      display: 'inline-block',
    },
    gem: {
      background: '#EDE7F6',
    },
    relic: {
      background: '#E3F2FD',
    },
    spell: {
      background: '#FFF3E0',
    },
    cardIcon: {
      position: 'absolute',
      right: 8,
      bottom: -8,
      fontSize: 120,
      zIndex: 0,
      opacity: 0.2,
    },
    gemIcon: {
      color: '#B39DDB',
    },
    relicIcon: {
      color: '#90CAF9',
    },
    spellIcon: {
      color: '#FFCC80',
    },
    cardLabel: {
      color: theme.palette.text.secondary,
    },
    cardSelected: {
      borderColor: theme.palette.secondary.main,
    },
    cardLabelSelected: {
      color: theme.palette.secondary.main,
    },
  })

export default supplyStyles
