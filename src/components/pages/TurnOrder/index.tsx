import React from 'react'

import ActiveGame from './ActiveGame'
import TurnOrderConfiguration from './TurnOrderConfiguration'
import { useGameState } from './hooks/useGameState'
import { useTurnOrderSetup } from './hooks/useTurnOrderSetup'


const TurnOrder = React.memo(() => {
  const { turnOrderSetup, handleTurnOrderSetupChange } = useTurnOrderSetup()

  const {
    dispatch,
    gameState,
    handleResetGame,
    handleStartGame,
    turnOrderState
  } = useGameState(turnOrderSetup)

  return (
    <React.Fragment>
      {gameState.started
          ? (
            <ActiveGame
              availableCards={turnOrderSetup.turnOrderCards}
              deckIsEmpty={turnOrderState.deck.length === 0}
              discard={turnOrderState.discard}
              dispatch={dispatch}
              handleResetGame={handleResetGame}
            />
          )
          : (
            <TurnOrderConfiguration
              turnOrderSetup={turnOrderSetup}
              startGame={handleStartGame}
              chooseSetup={handleTurnOrderSetupChange}
            />
          )}
    </React.Fragment>
  )
})

export default TurnOrder
