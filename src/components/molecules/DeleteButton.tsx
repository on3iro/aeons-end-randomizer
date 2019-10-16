import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

type Props = {
  onClick: (...args: any) => void
}

const DeleteButton = React.memo(({ onClick }: Props) => (
  <IconButton color="secondary" aria-label="Delete" onClick={onClick}>
    <DeleteIcon />
  </IconButton>
))

export default DeleteButton
