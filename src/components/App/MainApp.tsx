import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../Redux/Store'
import { useRouting } from '../../routes'

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
  const match = useRouting()
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  useEffect(() => {
    getUserConfiguration()
  }, [getUserConfiguration])

  return (
    <React.Fragment>
      <TopBar
        title={
          match.urlParameters
            ? `${match.title} ${match.urlParameters.id}`
            : match.title
        }
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
