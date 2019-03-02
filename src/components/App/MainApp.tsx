import React, { useState, useEffect } from 'react'

import { get as getFromDb } from 'idb-keyval'
import classNames from 'classnames'

import { ROUTES } from '../../routes'
import config from '../../config'
import { SetConfigurationContext } from '../../globalContexts'

import Content from '../Content'

import TopBar from './TopBar'
import DrawerMenu from './DrawerMenu'

const MainApp = ({ classes }: { classes: any }) => { 
  const [ currentLocation, setCurrentLocation ] = useState(ROUTES.nemeses)
  const moveTo = (route: string) => {
    toggleDrawer()
    setCurrentLocation(route)
  }

  const [ isLoading, setLoading ] = useState<boolean>(true)

  const [ drawerIsOpen, setDrawerIsOpen ] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  const setsAndPromos = config.EXPANSIONS
  const defaultSets = setsAndPromos.reduce(
    (acc, set) => ({ ...acc, [set]: false }) , {}
  )
  const [ configurationOfSets, setSets ] = useState<{[key: string]: boolean}>(defaultSets)

  // Get sets from indexedDB
  useEffect(() => {
    getFromDb('sets')
      .then(sets => {
        if (sets !== undefined) {
          setSets((sets as {[key: string]: boolean}))
        }
        setLoading(false)
      }).catch(() => {
        setLoading(false)
      })

    // Effect clean up, used if the component unmounts before the effect is
    // fully resolved. In this case just ignore the incoming promise result.
    return () => { return /* NoOp */ }
  }, [])

  return (
    <React.Fragment>
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
          isLoading={isLoading}
          route={currentLocation}
          classes={classes}
          className={
            classNames(
              classes.content,
              { [classes.contentShift]: drawerIsOpen },
              { [classes.loading]: isLoading }
            )
          }
        />
      </SetConfigurationContext.Provider>
    </React.Fragment>
  )
}

export default MainApp
