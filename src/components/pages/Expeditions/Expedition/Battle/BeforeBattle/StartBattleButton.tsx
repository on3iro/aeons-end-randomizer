import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const StartBattleButton = ({ handleClick }: Props) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      Start battle
    </Button>
  )
}

export default React.memo(StartBattleButton)
