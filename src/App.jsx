import React, { useState, useReducer } from 'react';

import classNames from 'classnames'
import 'rpg-awesome/css/rpg-awesome.min.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

import { styles } from './appStyles.js'
import { ROUTES } from './routes.js'
import config from './config'

import Routes from './components/Routes.jsx'
import Content from './components/Content.jsx'


const SetsReducer = (state, action) => {
  switch (action.type) {
    case ("SET_TOGGLE"): {
      return { ...state, ...action.payload }
    }
    default: {
      return state
    }
  }
}

export const SetContext = React.createContext(null)

const App = ({ classes, theme }) => {
  const [ drawerIsOpen, setDrawerIsOpen ] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  const [ currentLocation, setCurrentLocation ] = useState(ROUTES.nemeses)
  const moveTo = (route) => {
    toggleDrawer()
    setCurrentLocation(route)
  }

  const defaultSets = config.DATA.sets.reduce(
    (acc, set) => ({ ...acc, [set]: false }) , {}
  )
  const [ setConfiguration, dispatch ] = useReducer(SetsReducer, defaultSets)

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            className={classNames(classes.menuButton, drawerIsOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {currentLocation}
          </Typography>
        </Toolbar>
      </AppBar>
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
      </Drawer>
      <SetContext.Provider value={{ setConfiguration, dispatch, sets: config.DATA.sets }}>
        <Content
          route={currentLocation}
          classes={classes}
          className={classNames(classes.content, {
            [classes.contentShift]: drawerIsOpen,
          })}
        />
      </SetContext.Provider>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(App)
