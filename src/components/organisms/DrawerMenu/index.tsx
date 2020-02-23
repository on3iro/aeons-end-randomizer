import React from 'react'

import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import IconButton from 'components/atoms/IconButton'
import Navigation from 'components/molecules/Navigation'

import Header from './Header'
import AppInfo from './AppInfo'
import GitHubLink from './GitHubLink'
import GitHubLogo from './GitHubLogo'
import Drawer from './Drawer'
import GitHubSvg from './github-logo.svg'

type Props = {
  drawerIsOpen: boolean
  toggleDrawer: () => void
}

const DrawerMenu = ({ drawerIsOpen, toggleDrawer }: Props) => (
  <Drawer
    open={drawerIsOpen}
    onClose={toggleDrawer}
    variant="temporary"
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
        <GitHubLogo src={GitHubSvg} alt="SVG: Github logo" />
        Github
      </GitHubLink>
    </AppInfo>
  </Drawer>
)

export default React.memo(DrawerMenu)
