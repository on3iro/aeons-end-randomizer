import React, { useState, useEffect } from 'react';

import { get as getFromDb } from 'idb-keyval'

import classNames from 'classnames'
import 'rpg-awesome/css/rpg-awesome.min.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

import { styles } from './appStyles.js'
import { ROUTES } from 'routes.js'
import config from 'config'
import { SetConfigurationContext } from 'globalContexts'

import Content from 'components/Content.jsx'

import TopBar from './TopBar'
import DrawerMenu from './DrawerMenu'


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
  const [ configurationOfSets, setSets ] = useState(defaultSets)

  // Get sets from indexedDB
  useEffect(() => {
    getFromDb('sets').then(sets => {
      if (sets !== undefined) {
        setSets(sets)
      }
    })
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        classes={classes}
        drawerIsOpen={drawerIsOpen}
        currentLocation={currentLocation}
        toggleDrawer={toggleDrawer}
      />
      <DrawerMenu
        drawerIsOpen={drawerIsOpen}
        toggleDrawer={toggleDrawer}
        classes={classes}
        moveTo={moveTo}
      />
      <SetConfigurationContext.Provider value={{ configurationOfSets, setSets, sets: config.DATA.sets }}>
        <Content
          route={currentLocation}
          classes={classes}
          className={classNames(classes.content, {
            [classes.contentShift]: drawerIsOpen,
          })}
        />
      </SetConfigurationContext.Provider>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(App)
