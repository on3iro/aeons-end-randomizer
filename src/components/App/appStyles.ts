import { createStyles } from '@material-ui/core'

const drawerWidth = 240

export const styles = (theme: any) => {
  return createStyles({
    root: {
      height: '100%',
      paddingBottom: 72,
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    appInfo: {
      margin: theme.spacing.unit * 2,
    },
    githubLink: {
      display: 'block',
      lineHeight: '24px',
      marginTop: theme.spacing.unit * 2,
    },
    githubLogo: {
      width: '24px',
      display: 'inline-block',
      verticalAlign: 'middle',
      marginRight: theme.spacing.unit,
    },
    loading: {
      textAlign: 'center',
      paddingTop: '150px',
    },
  })
}
