import React, { useState, useEffect } from 'react'
import { useRedirect, useRoutes } from 'hookrouter'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../Redux/Store'

import Nemeses from '../pages/Nemeses'
import Mages from '../pages/Mages'
import Supply from '../pages/Supply'
import Settings from '../pages/Settings'
import TurnOrder from '../pages/TurnOrder'

import Content from '../Content'
import TopBar from '../TopBar'
import DrawerMenu from '../DrawerMenu'

const createRoutingTarget = (
  contentComponent: React.ReactNode,
  title: string
) => (queryParameters: Object) => ({
  queryParameters,
  contentComponent,
  title,
})

const routes = {
  '/nemesis': createRoutingTarget(<Nemeses />, 'Nemesis'),
  '/mages': createRoutingTarget(<Mages />, 'Mages'),
  '/supply': createRoutingTarget(<Supply />, 'Supply'),
  '/turnorder': createRoutingTarget(<TurnOrder />, 'Turn Order'),
  '/settings': createRoutingTarget(<Settings />, 'Settings'),
}

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
  // If no endpoint has been provided we redirect to the nemesis randomizer
  // because we currently do not have a dedicated landingpage
  useRedirect('/', '/nemesis')
  const match = useRoutes(routes)

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  useEffect(() => {
    getUserConfiguration()
  }, [getUserConfiguration])

  return (
    <React.Fragment>
      <TopBar
        title={match.title}
        drawerIsOpen={drawerIsOpen}
        toggleDrawer={toggleDrawer}
      />
      <DrawerMenu drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} />
      <Content
        contentComponent={match.contentComponent}
        isLoading={isLoading}
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
