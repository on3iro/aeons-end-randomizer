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
    cardSelected: {
      borderColor: theme.palette.secondary.main,
    },
  })

export default supplyStyles
