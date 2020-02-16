import React from 'react'

import Button from '@material-ui/core/Button'

type Props = {
  handleWin: () => void
}

const BattleWonButton = ({ handleWin }: Props) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={handleWin}
    >
      Battle won
    </Button>
  )
}

export default React.memo(BattleWonButton)
