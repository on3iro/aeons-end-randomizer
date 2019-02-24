import React from 'react'

import Button from '@material-ui/core/Button'
import ShuffleButton from 'components/ShuffleButton.jsx'

import TurnOrderTable from './TurnOrderTable'

const ActiveTurnOrder = React.memo(({
  deckIsEmpty,
  discard,
  handlers
}) => (
  <React.Fragment>
    {
      deckIsEmpty
        ? (<Button color='secondary' onClick={handlers.startNewRound}>New Round</Button>)
        : (
          <Button
            color='secondary' 
            onClick={handlers.drawTurnOrderCard}
          >
            Draw a card
          </Button>
        )
    }

    <TurnOrderTable
      cards={discard}
      handlers={handlers}
    />

  <ShuffleButton 
    color='primary'
    variant='extended'
    onClick={handlers.handleResetGame}
  >
        Reset Game
    </ShuffleButton>
  </React.Fragment>
))

export default ActiveTurnOrder
