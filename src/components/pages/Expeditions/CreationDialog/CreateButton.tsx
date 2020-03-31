import React from 'react'

import Button from '@material-ui/core/Button'

type Props = {
  handleExpeditionCreation: () => void
}

const CreateButton = ({ handleExpeditionCreation, ...rest }: Props) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={handleExpeditionCreation}
      {...rest}
    >
      Create Expedition
    </Button>
  )
}

export default React.memo(CreateButton)
