import React, { useState } from 'react'
import MuiTooltip from '@material-ui/core/Tooltip'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import InfoIcon from '@material-ui/icons/Info'
import IconButton from 'components/atoms/IconButton'

type Props = {
  children: React.ReactChild
}

const Tooltip = ({ children }: Props) => {
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false)

  const handleTooltipClose = () => {
    setTooltipOpen(false)
  }

  const handleTooltipOpen = () => {
    setTooltipOpen(!tooltipOpen)
  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <MuiTooltip
        title={children}
        PopperProps={{
          disablePortal: true,
          modifiers: {
            arrow: {
              enabled: true,
            },
          },
        }}
        onClose={handleTooltipClose}
        open={tooltipOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <IconButton
          color="primary"
          aria-label="Show language select info"
          onClick={handleTooltipOpen}
        >
          <InfoIcon />
        </IconButton>
      </MuiTooltip>
    </ClickAwayListener>
  )
}

export default Tooltip
