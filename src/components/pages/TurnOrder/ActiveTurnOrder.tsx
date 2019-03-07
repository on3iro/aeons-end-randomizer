import React from 'react'

import Button from '@material-ui/core/Button'

import {
  ITurnOrderCard
} from '../../../config/types'

import ShuffleButton from '../../ShuffleButton'

import TurnOrderTable from './TurnOrderTable'

const ActiveTurnOrder = React.memo(({
  deckIsEmpty,
  discard,
  handlers
}: {
  deckIsEmpty: boolean,
  discard: ITurnOrderCard[],
  handlers: {
    addToTop: (id: string) => void,
    addToBottom: (id: string) => void,
    shuffleIntoDeck: (id: string) => void,
    startNewRound: () => void,
    drawTurnOrderCard: () => void,
    handleResetGame: () => void
  }
}) => {
  const { startNewRound, drawTurnOrderCard, handleResetGame, ...otherHandlers } = handlers

  return (
    <React.Fragment>
      {
        deckIsEmpty
          ? (<Button size='large' variant='contained' color='secondary' onClick={startNewRound}>New Round</Button>)
          : (
            <Button
              size='large'
              variant='contained'
              color='secondary' 
              onClick={drawTurnOrderCard}
            >
              Draw a card
            </Button>
          )
      }

      <TurnOrderTable
        cards={discard}
        handlers={otherHandlers}
      />

    <ShuffleButton 
      color='primary'
      variant='extended'
      onClick={handleResetGame}
    >
          Reset Game
      </ShuffleButton>
    </React.Fragment>
  )
})

export default ActiveTurnOrder
