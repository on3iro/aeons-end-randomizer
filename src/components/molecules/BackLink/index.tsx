import React from 'react'

import Link from './Link'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

type Props = {
  to: string
  label: string
}

const BackLink = ({ to, label, ...rest }: Props) => (
  <Link to={to} {...rest}>
    <ChevronLeftIcon /> {label}
  </Link>
)

export default React.memo(BackLink)
