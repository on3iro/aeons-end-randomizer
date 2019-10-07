import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Toolbar from '@material-ui/core/Toolbar'

import Title from './Title'
import AppBar from './AppBar'
import MenuButton from './MenuButton'

type Props = {
  drawerIsOpen: boolean
  toggleDrawer: () => void
}

const TopBar = React.memo(({ drawerIsOpen, toggleDrawer }: Props) => (
  <AppBar drawerIsOpen={drawerIsOpen}>
    <Toolbar disableGutters={!drawerIsOpen}>
      <MenuButton drawerIsOpen={drawerIsOpen} onClick={toggleDrawer} />
      <Title variant="h6" color="inherit">
        <Switch>
          <Route path="/nemesis" render={() => 'Nemesis'} />
          <Route path="/mages" render={() => 'Mages'} />
          <Route path="/supply" render={() => 'Supply'} />
          <Route path="/turnorder" render={() => 'Turn Order'} />
          <Route path="/about" render={() => 'About'} />
          <Route
            path="/settings/expansions/:id"
            render={() => 'Settings: Expansions'}
          />
          <Route path="/settings" render={() => 'Settings'} />
          <Route path="/expeditions/:id" render={() => 'Expeditions'} />
          <Route path="/expeditions" render={() => 'Expeditions'} />
        </Switch>
      </Title>
    </Toolbar>
  </AppBar>
))

TopBar.displayName = 'TopBar'

export default TopBar
