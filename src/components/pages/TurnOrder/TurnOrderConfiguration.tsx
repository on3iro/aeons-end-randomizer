import React, { useState } from 'react'

import { withStyles } from '@material-ui/core/styles'

import { ITurnOrderSetup } from '../../../config/types'

import ShuffleButton from '../../ShuffleButton'

import turnOrderStyles from './styles'
import { Mode } from './hooks/useTurnOrderSetup'
import CardNameDisplay from './CardNameDisplay'
import ModeSelection from './ModeSelection'
import SetupSelection from './SetupSelection'

const TurnOrderConfiguration = React.memo(({
  turnOrderSetup,
  startGame,
  chooseSetup,
  classes
}: {
  turnOrderSetup: ITurnOrderSetup,
  startGame: () => void,
  chooseSetup: (setupId: string, mode: Mode) => void,
  classes: any
}) => {
  const [ turnOrderMode, setTurnOrderMode ] = useState<Mode>("Default")
  const handleSetupChange = (setupId: string, mode: Mode) => {
    setTurnOrderMode(mode)
    chooseSetup(setupId, mode)
  }

  return (
    <React.Fragment>
      <SetupSelection
        turnOrderSetup={turnOrderSetup}
        turnOrderMode={turnOrderMode}
        handleSetupChange={handleSetupChange}
      />
      <ModeSelection
        classes={classes}
        turnOrderMode={turnOrderMode}
        handleSetupChange={handleSetupChange}
        turnOrderSetupId={turnOrderSetup.id}
      />
      <CardNameDisplay classes={classes} turnOrderSetup={turnOrderSetup} />
      <ShuffleButton color='primary' variant='extended' onClick={startGame}>
        Start Game
      </ShuffleButton>
    </React.Fragment>
  )
})

export default withStyles(turnOrderStyles)(TurnOrderConfiguration)
