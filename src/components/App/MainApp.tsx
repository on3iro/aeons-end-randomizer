import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../Redux/Store'

import Content from '../organisms/Content'
import TopBar from '../organisms/TopBar'
import DrawerMenu from '../organisms/DrawerMenu'
import BottomNavigation from '../molecules/BottomNavigation'

const mapStateToProps = (state: RootState) => ({
  isLoading: selectors.Main.ContentLoading.getIsLoading(state),
})

const mapDispatchToProps = {
  getUserConfiguration: actions.Main.getUserConfiguration,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const MainApp = ({ getUserConfiguration, isLoading }: Props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  useEffect(() => {
    getUserConfiguration()
  }, [getUserConfiguration])

  return (
    <React.Fragment>
      <TopBar drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} />
      <DrawerMenu drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} />
      <Content isLoading={isLoading} />
      <Switch>
        <Route path="/randomizer/nemesis" render={() => <BottomNavigation />} />
        <Route
          path="/randomizer/basic-nemesis-cards"
          render={() => <BottomNavigation />}
        />
        <Route path="/randomizer/mages" render={() => <BottomNavigation />} />
        <Route path="/randomizer/supply" render={() => <BottomNavigation />} />
      </Switch>
      <div id="modal-root" />
    </React.Fragment>
  )
}

MainApp.displayName = 'MainApp'

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MainApp))
