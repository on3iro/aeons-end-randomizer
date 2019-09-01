import React from 'react'

import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import Navigation from '../Navigation'
import Header from './Header'
import AppInfo from './AppInfo'
import GitHubLink from './GitHubLink'
import GitHubLogo from './GitHubLogo'
import Drawer from './Drawer'

type Props = {
  drawerIsOpen: boolean
  toggleDrawer: () => void
}

const DrawerMenu = React.memo(({ drawerIsOpen, toggleDrawer }: Props) => (
  <Drawer
    open={drawerIsOpen}
    onClose={toggleDrawer}
    variant="persistent"
    anchor="left"
  >
    <Header>
      <IconButton onClick={toggleDrawer}>
        <ChevronLeftIcon />
      </IconButton>
    </Header>
    <Divider />
    <Navigation clickHandler={toggleDrawer} />
    <Divider />
    <AppInfo>
      Version: {process.env.REACT_APP_VERSION}
      <GitHubLink
        href="https://github.com/on3iro/aeons-end-randomizer"
        color="inherit"
        target="_blank"
      >
        <GitHubLogo src="images/github-logo.svg" alt="SVG: Github logo" />
        Github
      </GitHubLink>
    </AppInfo>
  </Drawer>
))

DrawerMenu.displayName = 'DrawerMenu'

export default DrawerMenu
