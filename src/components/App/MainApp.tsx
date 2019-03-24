import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'

import { RootState } from '../../Redux/Store'
import * as MainContentLoading from '../../Redux/Store/MainContentLoading'
import * as SelectedExpansions from '../../Redux/Store/Settings/Expansions/Selected'
import * as TurnOrderConfig from '../../Redux/Store/TurnOrder/Configuration'
import { ROUTES } from '../../routes'
import Content from '../Content'
import TopBar from './TopBar'
import DrawerMenu from './DrawerMenu'

const mapStateToProps = (state: RootState) => ({
  isLoading: MainContentLoading.selectors.getIsLoading(state),
})

const mapDispatchToProps = {
  fetchExpansionsFromDB: SelectedExpansions.actions.fetchFromDB,
  fetchTurnOrderConfigFromDB: TurnOrderConfig.actions.fetchFromDB,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
    isLoading: boolean
  }

const MainApp = ({
  classes,
  fetchExpansionsFromDB,
  fetchTurnOrderConfigFromDB,
  isLoading,
}: Props) => {
  const [currentLocation, setCurrentLocation] = useState(ROUTES.nemeses)
  const moveTo = (route: string) => {
    toggleDrawer()
    setCurrentLocation(route)
  }

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  // Get sets from indexedDB
  useEffect(() => {
    fetchExpansionsFromDB()
    fetchTurnOrderConfigFromDB()
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
      <Content
        isLoading={isLoading}
        route={currentLocation}
        classes={classes}
        className={classNames(
          classes.content,
          { [classes.contentShift]: drawerIsOpen },
          { [classes.loading]: isLoading }
        )}
      />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)
