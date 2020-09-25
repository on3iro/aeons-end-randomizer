import React from 'react'
import Button from './Button'

import LockOpenIcon from '@material-ui/icons/LockOpen'
import { Lock } from '@material-ui/icons'

type Props = {
  lock: (e: Event) => void
  isLocked?: boolean
  theme: any
}

const LockButton = ({ lock, theme, isLocked = false }: Props) => (
  <Button onClick={lock} themeColor={theme}>
    {isLocked ? <Lock /> : <LockOpenIcon />}
  </Button>
)

export default React.memo(LockButton)
