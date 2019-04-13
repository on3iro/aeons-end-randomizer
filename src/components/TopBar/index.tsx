import React from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'

import Title from './Title'
import AppBar from './AppBar'
import MenuButton from './MenuButton'

type Props = {
  drawerIsOpen: boolean
  currentLocation: string
  toggleDrawer: () => void
}

const TopBar = React.memo(
  ({ drawerIsOpen, currentLocation, toggleDrawer }: Props) => (
    <AppBar drawerIsOpen={drawerIsOpen}>
      <Toolbar disableGutters={!drawerIsOpen}>
        <MenuButton
          drawerIsOpen={drawerIsOpen}
          aria-label="Menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </MenuButton>
        <Title variant="h6" color="inherit">
          {currentLocation}
        </Title>
      </Toolbar>
    </AppBar>
  )
)

TopBar.displayName = 'TopBar'

export default TopBar
