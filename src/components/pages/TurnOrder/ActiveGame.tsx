import React from 'react'

import Button from '@material-ui/core/Button'

import {
  ITurnOrderCard
} from '../../../config/types'

import ShuffleButton from '../../ShuffleButton'

import Table from './Table'
import { TurnOrderAction } from './hooks/TurnOrderStateReducer'

const ActiveTurnOrder = React.memo(({
  availableCards,
  deckIsEmpty,
  discard,
  dispatch,
  handleResetGame
}: {
  availableCards: ITurnOrderCard[],
  deckIsEmpty: boolean,
  discard: ITurnOrderCard[],
  dispatch: (action: TurnOrderAction) => void,
  handleResetGame: () => void
}) => (
  <React.Fragment>
    {
      deckIsEmpty
        ? (
          <Button
            size='large' 
            variant='contained' 
            color='secondary' 
            onClick={() => dispatch({type: 'NEW_ROUND', payload: availableCards })}
          >
            New Round
          </Button>
        )
        : (
          <Button
            size='large'
            variant='contained'
            color='secondary' 
            onClick={() => dispatch({ type: 'DRAW' })}
          >
            Draw a card
          </Button>
        )
    }

    <Table
      cards={discard}
      dispatch={dispatch}
    />

  <ShuffleButton 
    color='primary'
    variant='extended'
    onClick={handleResetGame}
  >
        Reset Game
    </ShuffleButton>
  </React.Fragment>
))

export default ActiveTurnOrder
