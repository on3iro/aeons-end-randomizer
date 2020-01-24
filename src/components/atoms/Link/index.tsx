import React from 'react'

import RouterLink from './_styled_/RouterLink'

type Props = {
  to?: any
  children: any
}

const Link = ({ to, children }: Props) => {
  return <RouterLink to={to}>{children}</RouterLink>
}

export default React.memo(Link)
