import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../Redux/Store'

import { ROUTES } from '../../routes'
import Content from '../Content'
import TopBar from '../TopBar'
import DrawerMenu from '../DrawerMenu'

const mapStateToProps = (state: RootState) => ({
  isLoading: selectors.Main.ContentLoading.getIsLoading(state),
})

const mapDispatchToProps = {
  getUserConfiguration: actions.Main.getUserConfiguration,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    isLoading: boolean
  }

const MainApp = ({ getUserConfiguration, isLoading }: Props) => {
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
        drawerIsOpen={drawerIsOpen}
        currentLocation={currentLocation}
        toggleDrawer={toggleDrawer}
      />
      <DrawerMenu
        drawerIsOpen={drawerIsOpen}
        toggleDrawer={toggleDrawer}
        moveTo={moveTo}
      />
      <Content
        isLoading={isLoading}
        route={currentLocation}
        drawerIsOpen={drawerIsOpen}
      />
    </React.Fragment>
  )
}

MainApp.displayName = 'MainApp'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)
