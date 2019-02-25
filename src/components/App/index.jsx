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

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const App = ({ classes }) => {
  const [ drawerIsOpen, setDrawerIsOpen ] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  const [ currentLocation, setCurrentLocation ] = useState(ROUTES.nemeses)
  const moveTo = (route) => {
    toggleDrawer()
    setCurrentLocation(route)
  }

  const setsAndPromos = [ ...config.DATA.sets, ...config.DATA.promos ]
  const defaultSets = setsAndPromos.reduce(
    (acc, set) => ({ ...acc, [set]: false }) , {}
  )
  const [ configurationOfSets, setSets ] = useState(defaultSets)

  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: pink,
    },
    typography: {
      useNextVariants: true,
    },
  });

  // Get sets from indexedDB
  useEffect(() => {
    getFromDb('sets').then(sets => {
      if (sets !== undefined) {
        setSets(sets)
      }
    })
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
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
        <SetConfigurationContext.Provider
          value={{ configurationOfSets, setSets, sets: setsAndPromos }}
        >
          <Content
            route={currentLocation}
            classes={classes}
            className={
              classNames(
                classes.content,
                { [classes.contentShift]: drawerIsOpen }
              )
            }
          />
        </SetConfigurationContext.Provider>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles, { withTheme: true })(App)
