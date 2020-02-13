import React from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Button from './_styled_/Button'
import Label from './_styled_/Label'

type Props = {
  isExpanded: boolean
}

const IconButton = ({ isExpanded }: Props) => {
  return (
    <Button
      isExpanded={isExpanded}
      tabIndex={-1}
      role="button"
      aria-hidden="true"
    >
      <Label>
        <ExpandMoreIcon />
      </Label>
    </Button>
  )
}

export default React.memo(IconButton)
