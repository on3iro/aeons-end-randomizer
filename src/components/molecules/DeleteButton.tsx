import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

type Props = {
  onClick: (...args: any) => void
  className?: string
}

const DeleteButton = React.memo(({ onClick, className }: Props) => (
  <IconButton
    color="secondary"
    aria-label="Delete"
    onClick={onClick}
    className={className}
  >
    <DeleteIcon />
  </IconButton>
))

export default DeleteButton
