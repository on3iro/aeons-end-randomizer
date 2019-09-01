import React from 'react'
import { usePath } from 'hookrouter'

import Toolbar from '@material-ui/core/Toolbar'

import Title from './Title'
import AppBar from './AppBar'
import MenuButton from './MenuButton'

type Props = {
  drawerIsOpen: boolean
  toggleDrawer: () => void
}

const TopBar = React.memo(({ drawerIsOpen, toggleDrawer }: Props) => {
  const path = usePath()
  const pathMappings: { [key: string]: string } = {
    '/': 'Home',
    '/nemesis': 'Nemesis',
    '/mages': 'Mages',
    '/supply': 'Supply',
    '/turnorder': 'Turn Order',
    '/settings': 'Settings',
  }
  const currentLocation = pathMappings[path]

  return (
    <AppBar drawerIsOpen={drawerIsOpen}>
      <Toolbar disableGutters={!drawerIsOpen}>
        <MenuButton drawerIsOpen={drawerIsOpen} onClick={toggleDrawer} />
        <Title variant="h6" color="inherit">
          {currentLocation}
        </Title>
      </Toolbar>
    </AppBar>
  )
})

TopBar.displayName = 'TopBar'

export default TopBar
