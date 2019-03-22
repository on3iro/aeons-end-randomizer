import React from 'react'

import classNames from 'classnames'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const TopBar = React.memo(
  ({
    classes,
    drawerIsOpen,
    currentLocation,
    toggleDrawer,
  }: {
    classes: any
    drawerIsOpen: boolean
    currentLocation: string
    toggleDrawer: () => void
  }) => (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: drawerIsOpen,
      })}
    >
      <Toolbar disableGutters={!drawerIsOpen}>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={toggleDrawer}
          className={classNames(
            classes.menuButton,
            drawerIsOpen && classes.hide
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {currentLocation}
        </Typography>
      </Toolbar>
    </AppBar>
  )
)

export default TopBar
