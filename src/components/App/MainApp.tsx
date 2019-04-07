import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'

import { RootState, actions, selectors } from '../../Redux/Store'

import { ROUTES } from '../../routes'
import Content from '../Content'
import TopBar from './TopBar'
import DrawerMenu from './DrawerMenu'

const mapStateToProps = (state: RootState) => ({
  isLoading: selectors.Main.ContentLoading.getIsLoading(state),
})

const mapDispatchToProps = {
  getUserConfiguration: actions.Main.getUserConfiguration,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
    isLoading: boolean
  }

const MainApp = ({ classes, getUserConfiguration, isLoading }: Props) => {
  const [currentLocation, setCurrentLocation] = useState(ROUTES.nemeses)
  const moveTo = (route: string) => {
    toggleDrawer()
    setCurrentLocation(route)
  }

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  useEffect(() => {
    getUserConfiguration()
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

MainApp.displayName = 'MainApp'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)
