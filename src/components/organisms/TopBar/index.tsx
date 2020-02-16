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

const TopBar = ({ drawerIsOpen, toggleDrawer }: Props) => (
  <AppBar>
    <Toolbar disableGutters={!drawerIsOpen}>
      <MenuButton drawerIsOpen={drawerIsOpen} onClick={toggleDrawer} />
      <Title variant="h6" color="inherit">
        <Switch>
          <Route path="/randomizer/nemesis" render={() => 'Nemesis'} />
          <Route
            path="/randomizer/basic-nemesis-cards"
            render={() => 'Basic Nemesis Cards'}
          />
          <Route path="/randomizer/mages" render={() => 'Mages'} />
          <Route path="/randomizer/supply" render={() => 'Supply'} />
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
)

export default React.memo(TopBar)
