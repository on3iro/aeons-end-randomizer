import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  handleRewardConfirmation: () => void
}

const ConfirmButton = ({ handleRewardConfirmation, ...rest }: Props) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={handleRewardConfirmation}
      {...rest}
    >
      Get rewards
    </Button>
  )
}

export default React.memo(ConfirmButton)
