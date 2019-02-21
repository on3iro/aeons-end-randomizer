import React from 'react'

import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Typography from '@material-ui/core/Typography'

import Routes from 'components/Routes.jsx'

const DrawerMenu = ({
  drawerIsOpen,
  toggleDrawer,
  classes,
  moveTo
}) => (
  <Drawer
    open={drawerIsOpen}
    onClose={toggleDrawer}
    variant="persistent"
    className={classes.drawer}
    anchor="left"
    classes={{
      paper: classes.drawerPaper
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
    <Typography>{process.env.REACT_APP_VERSION}</Typography>
  </Drawer>
)

export default DrawerMenu
