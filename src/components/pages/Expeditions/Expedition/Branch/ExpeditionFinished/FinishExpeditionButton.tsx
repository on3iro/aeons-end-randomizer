import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  handleFinish: () => void
}

const FinishExpeditionButton = ({ handleFinish }: Props) => {
  return (
    <Button
      onClick={handleFinish}
      size="small"
      variant="contained"
      color="primary"
    >
      Finish Expedition
    </Button>
  )
}

export default React.memo(FinishExpeditionButton)
