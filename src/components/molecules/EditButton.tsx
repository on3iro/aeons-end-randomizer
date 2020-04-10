import React from 'react'
import IconButton from 'components/atoms/IconButton'
import EditIcon from '@material-ui/icons/Edit'

type Props = {
  onClick: (...args: any) => void
}

const EditButton = ({ onClick, ...rest }: Props) => (
  <IconButton color="primary" aria-label="Edit" onClick={onClick} {...rest}>
    <EditIcon />
  </IconButton>
)

export default React.memo(EditButton)
