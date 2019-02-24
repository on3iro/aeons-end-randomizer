import React, { useState } from 'react'

import config from 'config'

import {
  createEntityList
} from '../helpers'

import ActiveTurnOrder from './ActiveTurnOrder'
import TurnOrderSetup from './TurnOrderSetup'


const shuffleDeck = (deck) => {
  return createEntityList(deck, deck)
}

const TurnOrder = () => {
  // Turn order setup handling
  const [turnOrderSetup, setTurnOrderSetup] = useState(config.TURNORDERSETUPS['onePlayerThreeToc'])
  const handleTurnOrderSetup = (event) => {
    setTurnOrderSetup(config.TURNORDERSETUPS[event.target.value])
  }

  // Game state handling
  const [gameState, setGameState] = useState({
    started: false
  })

  const handleStartGame = () => {
    setGameState({
      started: true
    })

    setTurnOrderState({
      ...turnOrderState,
      deck: shuffleDeck(turnOrderSetup.turnOrderCards)
    })
  }

  const handleResetGame = () => {
    setGameState({
      started: false
    })

    setTurnOrderState({
      ...turnOrderState,
      discard: []
    })
  }

  // Turn order state handling
  const [turnOrderState, setTurnOrderState] = useState({
    deck: [],
    discard: []
  })

  const drawTurnOrderCard = () => {
    const { deck } = turnOrderState

    if(deck.length === 0) return

    const cardDrawn = deck[deck.length - 1];

    setTurnOrderState({
        deck: deck.filter(card => card.id !== cardDrawn.id),
        discard: [...turnOrderState.discard, cardDrawn]
    })
  }

  const startNewRound = () => {
    setTurnOrderState({
        deck: shuffleDeck(turnOrderSetup.turnOrderCards),
        discard: []
    })
  }

  const addToTop = (cardId) => {
    const cardToAdd = turnOrderState.discard.find(card => card.id === cardId)

    setTurnOrderState({
        deck: [...turnOrderState.deck, cardToAdd],
        discard: turnOrderState.discard.filter(card => card.id !== cardId)
    })
  }

  const addToBottom = (cardId) => {
    const cardToAdd = turnOrderState.discard.find(card => card.id === cardId)

    setTurnOrderState({
        deck: [cardToAdd, ...turnOrderState.deck],
        discard: turnOrderState.discard.filter(card => card.id !== cardId)
    })
  }

  const shuffleIntoDeck = (cardId) => {
    const cardToShuffle = turnOrderState.discard.find(card => card.id === cardId)
    const newDeck = [...turnOrderState.deck, cardToShuffle]
    const shuffledDeck = shuffleDeck(newDeck)

    setTurnOrderState({
        deck: shuffledDeck,
        discard: turnOrderState.discard.filter(card => card.id !== cardId)
    })
  }

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
              chooseSetup={handleTurnOrderSetup}
            />
          )}
    </React.Fragment>
  )
}

export default TurnOrder
