import { useState, useEffect } from 'react'

import {
  get as getFromDb,
  set as setToDb
} from 'idb-keyval'

import config from 'config'

import {
  createEntityList
} from '../helpers'


const shuffleDeck = (deck) => {
  return createEntityList(deck, deck)
}

export const useTurnOrderSetup = () => {
  const [turnOrderSetup, setTurnOrderSetup] = useState(
    config.TURNORDERSETUPS['onePlayerThreeToc']
  )
  const handleTurnOrderSetupChange = (event) => {
    const setup = config.TURNORDERSETUPS[event.target.value]
    setTurnOrderSetup(setup)
    setToDb('turnOrderSetup', setup)
  }

  useEffect(() => {
    getFromDb('turnOrderSetup').then(setup => {
      if (setup !== undefined) {
        setTurnOrderSetup(setup)
      }
    })
  }, [])

  return {
    turnOrderSetup,
    handleTurnOrderSetupChange
  }
}

export const useGameState = (turnOrderSetup) => {
  const TURNORDERSTATE = 'turnOrderState'

  const [turnOrderState, setTurnOrderState] = useState({
    deck: [],
    discard: []
  })

  const [gameState, setGameState] = useState({
    started: false
  })

  const drawTurnOrderCard = () => {
    const { deck } = turnOrderState

    if(deck.length === 0) return

    const cardDrawn = deck[deck.length - 1];

    const newState = {
      deck: deck.filter(card => card.id !== cardDrawn.id),
      discard: [cardDrawn, ...turnOrderState.discard ]
    }

    setTurnOrderState(newState)
    setToDb(TURNORDERSTATE, {
      turnOrderState: newState,
      gameState
    })
  }

  const startNewRound = () => {
    const newState = {
      deck: shuffleDeck(turnOrderSetup.turnOrderCards),
      discard: []
    }

    setTurnOrderState(newState)
    setToDb(TURNORDERSTATE, {
      turnOrderState: newState,
      gameState
    })
  }

  const addToTop = (cardId) => {
    const cardToAdd = turnOrderState.discard.find(card => card.id === cardId)

    const newState = {
      deck: [...turnOrderState.deck, cardToAdd],
      discard: turnOrderState.discard.filter(card => card.id !== cardId)
    }

    setTurnOrderState(newState)
    setToDb(TURNORDERSTATE, {
      turnOrderState: newState,
      gameState
    })
  }

  const addToBottom = (cardId) => {
    const cardToAdd = turnOrderState.discard.find(card => card.id === cardId)

    const newState = {
      deck: [cardToAdd, ...turnOrderState.deck],
      discard: turnOrderState.discard.filter(card => card.id !== cardId)
    }

    setTurnOrderState(newState)
    setToDb(TURNORDERSTATE, {
      turnOrderState: newState,
      gameState
    })
  }

  const shuffleIntoDeck = (cardId) => {
    const cardToShuffle = turnOrderState.discard.find(card => card.id === cardId)
    const newDeck = [...turnOrderState.deck, cardToShuffle]
    const shuffledDeck = shuffleDeck(newDeck)

    const newState = {
      deck: shuffledDeck,
      discard: turnOrderState.discard.filter(card => card.id !== cardId)
    }

    setTurnOrderState(newState)
    setToDb(TURNORDERSTATE, {
      turnOrderState: newState,
      gameState
    })
  }

  // Game state handling
  const handleStartGame = () => {
    const gameState = { started: true }

    setGameState(gameState)

    const deckAndDiscardState = {
      ...turnOrderState,
      deck: shuffleDeck(turnOrderSetup.turnOrderCards)
    }

    setTurnOrderState(deckAndDiscardState)

    setToDb(TURNORDERSTATE, { gameState, deckAndDiscardState })
  }

  const handleResetGame = () => {
    const gameState = { stated: false }

    setGameState(gameState)

    const deckAndDiscardState = { ...turnOrderState, discard: [] }

    setTurnOrderState(deckAndDiscardState)

    setToDb(TURNORDERSTATE, { gameState, deckAndDiscardState })
  }

  useEffect(() => {
    getFromDb(TURNORDERSTATE).then(state => {
      const isValidState = (
        state !== undefined &&
        state.turnOrderState &&
        state.turnOrderState.deck &&
        state.turnOrderState.discard
      )
      if (isValidState) {
        setGameState(state.gameState)
        setTurnOrderState(state.turnOrderState)
      }
    })
  }, [])

  return {
    addToBottom,
    addToTop,
    drawTurnOrderCard,
    gameState,
    handleResetGame,
    handleStartGame,
    shuffleIntoDeck,
    startNewRound,
    turnOrderState
  }
}
