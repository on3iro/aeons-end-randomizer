import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  handleRewardConfirmation: () => void
}

const ConfirmButton = ({ handleRewardConfirmation }: Props) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={handleRewardConfirmation}
    >
      Confirm choice
    </Button>
  )
}

export default React.memo(ConfirmButton)
