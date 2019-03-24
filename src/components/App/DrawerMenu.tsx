import React from 'react'

import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import Routes from '../Routes'

type Props = {
  drawerIsOpen: boolean
  toggleDrawer: () => void
  classes: any
  moveTo: (route: string) => void
}

const DrawerMenu = React.memo(
  ({ drawerIsOpen, toggleDrawer, classes, moveTo }: Props) => (
    <Drawer
      open={drawerIsOpen}
      onClose={toggleDrawer}
      variant="persistent"
      className={classes.drawer}
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Routes locationhandler={moveTo} />
      <Divider />
      <Typography className={classes.appInfo}>
        Version: {process.env.REACT_APP_VERSION}
        <Link
          href="https://github.com/on3iro/aeons-end-randomizer"
          color="inherit"
          className={classes.githubLink}
          target="_blank"
        >
          <img
            src="images/github-logo.svg"
            alt="SVG: Github logo"
            className={classes.githubLogo}
          />
          Github
        </Link>
      </Typography>
    </Drawer>
  )
)

export default DrawerMenu
