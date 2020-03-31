import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  handleFinish: () => void
  finishingIsPossible: boolean
}

const UnlockNextButton = ({ handleFinish, finishingIsPossible }: Props) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={handleFinish}
      disabled={!finishingIsPossible}
      data-test="btn-unlock-next-battle"
    >
      Unlock next battle
    </Button>
  )
}

export default React.memo(UnlockNextButton)
