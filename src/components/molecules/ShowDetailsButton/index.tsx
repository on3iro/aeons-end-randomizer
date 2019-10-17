import React from 'react'
import Button from './Button'

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'

type Props = {
  showDetails: (e: Event) => void
  theme: any
}

const ShowDetailsButton = React.memo(({ showDetails, theme }: Props) => (
  <Button onClick={showDetails} themeColor={theme}>
    <VisibilityOutlinedIcon /> Show details
  </Button>
))

export default ShowDetailsButton
