import React from 'react'
import Button from './Button'

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'

type Props = {
  onClick: any // FIXME
}

const ShowDetailsButton = (props: Props) => (
  <Button {...props}>
    <VisibilityOutlinedIcon /> Show details
  </Button>
)

export default ShowDetailsButton
