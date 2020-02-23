import React from 'react'
import CopyIcon from '@material-ui/icons/FileCopy'

import IconButton from 'components/atoms/IconButton'

type Props = {
  onClick: (...args: any) => void
  className?: string
}

const CopyButton = ({ onClick, className }: Props) => (
  <IconButton
    color="secondary"
    aria-label="Copy"
    onClick={onClick}
    className={className}
  >
    <CopyIcon />
  </IconButton>
)

export default React.memo(CopyButton)
