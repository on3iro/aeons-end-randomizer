import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import A from './A'

type Props = {
  text: string
  to: string
  children: any
  onClick?: () => void
}

const Link = React.memo(({ text, to, children, onClick }: Props) => (
  <A to={to}>
    <ListItem button key={text} onClick={onClick}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  </A>
))

Link.displayName = 'Link'

export default Link
