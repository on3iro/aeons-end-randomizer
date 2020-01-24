import React from 'react'

import ListItem from 'components/atoms/_styled_/ListItem'

import Link from './_styled_/Link'
import LinkIcon from './_styled_/LinkIcon'
import LinkText from './_styled_/LinkText'

type Props = {
  text: string
  to: string
  children: any
  onClick?: () => void
}

const NavLink = ({ text, to, children, onClick }: Props) => (
  <ListItem key={text}>
    <Link to={to} onClick={onClick}>
      <LinkIcon>{children}</LinkIcon>
      <LinkText>{text}</LinkText>
    </Link>
  </ListItem>
)

export default React.memo(NavLink)
