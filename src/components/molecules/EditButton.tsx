import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

type Props = {
  onClick: (...args: any) => void
}

const EditButton = ({ onClick }: Props) => (
  <IconButton color="primary" aria-label="Edit" onClick={onClick}>
    <EditIcon />
  </IconButton>
)

export default React.memo(EditButton)
