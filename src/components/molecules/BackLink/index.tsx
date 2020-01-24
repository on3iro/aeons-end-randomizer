import React from 'react'

import Link from './_styled_/Link'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

type Props = {
  to: string
  label: string
}

const BackLink = ({ to, label }: Props) => (
  <Link to={to}>
    <ChevronLeftIcon /> {label}
  </Link>
)

export default BackLink
