import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  label: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const DescisionButton = ({ label, handleClick, ...rest }: Props) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={handleClick}
      {...rest}
    >
      {label}
    </Button>
  )
}

export default React.memo(DescisionButton)
