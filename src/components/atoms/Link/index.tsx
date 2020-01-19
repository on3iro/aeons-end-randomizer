import React from 'react'

import RouterLink from './styled/RouterLink'

type Props = {
  to?: any
  children: any
}

const Link = React.memo(({ to, children }: Props) => {
  return <RouterLink to={to}>{children}</RouterLink>
})

Link.displayName = 'Link'

export default Link
