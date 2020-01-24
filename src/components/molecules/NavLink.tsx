import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import Link from 'components/atoms/Link'

type Props = {
  text: string
  to: string
  children: any
  onClick?: () => void
}

const NavLink = React.memo(({ text, to, children, onClick }: Props) => (
  <Link to={to}>
    <ListItem button key={text} onClick={onClick}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  </Link>
))

NavLink.displayName = 'Link'

export default NavLink
