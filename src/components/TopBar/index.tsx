import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'

import Title from './Title'
import AppBar from './AppBar'
import MenuButton from './MenuButton'

type Props = {
  drawerIsOpen: boolean
  toggleDrawer: () => void
  title: string
}

const TopBar = React.memo(({ drawerIsOpen, toggleDrawer, title }: Props) => (
  <AppBar drawerIsOpen={drawerIsOpen}>
    <Toolbar disableGutters={!drawerIsOpen}>
      <MenuButton drawerIsOpen={drawerIsOpen} onClick={toggleDrawer} />
      <Title variant="h6" color="inherit">
        {title}
      </Title>
    </Toolbar>
  </AppBar>
))

TopBar.displayName = 'TopBar'

export default TopBar
