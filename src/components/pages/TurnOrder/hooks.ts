import React, { useState, useEffect } from 'react'

import {
  get as getFromDb,
  set as setToDb
} from 'idb-keyval'

import config from '../../../config'
import {
  ITurnOrderCard,
  ITurnOrderSetup
} from '../../../config/types'

import {
  getRandomEntity
} from '../helpers'

type TurnOrderListReductionResult = {
  availableCards: ITurnOrderCard[],
  result: ITurnOrderCard[]
}

const isValidTurnOrderState = (state: TurnOrderState): state is TurnOrderState => {
  return (
    (<TurnOrderState>state) !== undefined &&
    (<TurnOrderState>state).deck !== undefined &&
    (<TurnOrderState>state).discard !== undefined
  )
}

type GameState = {
  started: boolean
}

const isValidGameState = (state: GameState): state is GameState => (<GameState>state).started !== undefined

const createTurnOrderCardList = (
  availableCards: ITurnOrderCard[],
  slots: ITurnOrderCard[],
  getEntity: <T>(list: Array<T>) => T
): TurnOrderListReductionResult => {
  const result = slots.reduce(
    (
      acc: TurnOrderListReductionResult,
      slot: ITurnOrderCard,
      i: number
    ) => {
      // If no entity is left, simply return the actual empty slot
      const card = getEntity(acc.availableCards) || slot

      // Make sure each entity will only be added to the result list once
      const remainingCards = acc.availableCards.filter(
        entity => entity.id !== card.id
      )

      return {
        availableCards: remainingCards,
        result: [ ...acc.result, card ]
      }
  }, { availableCards, result: [] })

  return result
}


const shuffleDeck = (deck: ITurnOrderCard[]): ITurnOrderCard[] => {
  return createTurnOrderCardList(deck, deck, getRandomEntity).result
}

export const useTurnOrderSetup = () => {
  const [turnOrderSetup, setTurnOrderSetup] = useState(
    config.TURNORDERSETUPS['onePlayerThreeToc']
  )
  const handleTurnOrderSetupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const setup = config.TURNORDERSETUPS[event.currentTarget.value]
    setTurnOrderSetup(setup)
    setToDb('turnOrderSetup', setup)
  }

  useEffect(() => {
    getFromDb('turnOrderSetup').then((setup) => {
      if (setup !== undefined) {
        setTurnOrderSetup(setup as ITurnOrderSetup)
      }
    })
  }, [])

  return {
    turnOrderSetup,
    handleTurnOrderSetupChange
  }
}

type TurnOrderState = {
  deck: ITurnOrderCard[],
  discard: ITurnOrderCard[]
}

export const useGameState = (turnOrderSetup: ITurnOrderSetup) => {
  const TURNORDERSTATE = 'turnOrderState'

  const [turnOrderState, setTurnOrderState] = useState<TurnOrderState>({
    deck: [],
    discard: []
  })

  const [gameState, setGameState] = useState<GameState>({
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

  const addToTop = (cardId: string) => {
    const cardToAdd = turnOrderState.discard.find(card => card.id === cardId)

    if (!cardToAdd) return;

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

  const addToBottom = (cardId: string) => {
    const cardToAdd = turnOrderState.discard.find(card => card.id === cardId)

    if (!cardToAdd) return;

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

  const shuffleIntoDeck = (cardId: string) => {
    const cardToShuffle = turnOrderState.discard.find(card => card.id === cardId)

    if (!cardToShuffle) return;

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
    const gameState = { started: false }

    setGameState(gameState)

    const deckAndDiscardState = { ...turnOrderState, discard: [] }

    setTurnOrderState(deckAndDiscardState)

    setToDb(TURNORDERSTATE, { gameState, deckAndDiscardState })
  }

  useEffect(() => {
    getFromDb(TURNORDERSTATE).then((state: any) => {
      if (!state) return;

      const { turnOrderState, gameState } = state

      const isValidState = (
       isValidTurnOrderState(turnOrderState) &&
       isValidGameState(gameState)
      )
      if (isValidState) {
        setGameState(gameState)
        setTurnOrderState(turnOrderState)
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
