import React from 'react'

import ActiveTurnOrder from './ActiveTurnOrder'
import TurnOrderSetup from './TurnOrderSetup'
import {
  useTurnOrderSetup,
  useGameState
} from './hooks'


const TurnOrder = () => {
  const { turnOrderSetup, handleTurnOrderSetupChange } = useTurnOrderSetup()

  const {
    addToBottom,
    addToTop,
    drawTurnOrderCard,
    gameState,
    handleResetGame,
    handleStartGame,
    shuffleIntoDeck,
    startNewRound,
    turnOrderState
  } = useGameState(turnOrderSetup)

  return (
    <React.Fragment>
      {gameState.started
          ? (
            <ActiveTurnOrder
              deckIsEmpty={turnOrderState.deck.length === 0}
              discard={turnOrderState.discard}
              handlers={{
                addToBottom,
                addToTop,
                drawTurnOrderCard,
                handleResetGame,
                shuffleIntoDeck,
                startNewRound
              }}
            />
          )
          : (
            <TurnOrderSetup
              turnOrderSetup={turnOrderSetup}
              startGame={handleStartGame}
              chooseSetup={handleTurnOrderSetupChange}
            />
          )}
    </React.Fragment>
  )
}

export default TurnOrder
