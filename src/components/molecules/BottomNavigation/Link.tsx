import React from 'react'

import StyledLink from './StyledLink'

type Props = {
  to: string
  label: string
  icon: string
}

const Link = ({ to, label, icon }: Props) => (
  <StyledLink to={to} isActive={(match: any) => (match ? true : false)}>
    <i className={`ra ra-lg ${icon}`} />
    <span>{label}</span>
  </StyledLink>
)

export default React.memo(Link)
