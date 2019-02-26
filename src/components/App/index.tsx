import React, { useState, useEffect } from 'react';

import { get as getFromDb } from 'idb-keyval'

import classNames from 'classnames'
import 'rpg-awesome/css/rpg-awesome.min.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'

import { styles } from './appStyles'
import { ROUTES } from '../../routes'
import config from '../../config'
import { SetConfigurationContext } from '../../globalContexts'

import Content from '../Content'

import TopBar from './TopBar'
import DrawerMenu from './DrawerMenu'


const App = ({ classes }: { classes: any }) => {
  const [ drawerIsOpen, setDrawerIsOpen ] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  const [ currentLocation, setCurrentLocation ] = useState(ROUTES.nemeses)
  const moveTo = (route: string) => {
    toggleDrawer()
    setCurrentLocation(route)
  }

  const setsAndPromos = config.EXPANSIONS
  const defaultSets = setsAndPromos.reduce(
    (acc, set) => ({ ...acc, [set]: false }) , {}
  )
  const [ configurationOfSets, setSets ] = useState<{[key: string]: boolean}>(defaultSets)

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
        setSets((sets as {[key: string]: boolean}))
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
