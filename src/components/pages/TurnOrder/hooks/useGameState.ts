import React, { useState, useReducer, useEffect } from 'react'

import {
  get as getFromDb,
  set as setToDb
} from 'idb-keyval'

import config from '../../../../config'
import {
  ITurnOrderCard,
  ITurnOrderSetup
} from '../../../../config/types'
import { CARDS } from '../../../../config/turnOrderSetups'

import {
  getRandomEntity
} from '../../helpers'

import TurnOrderStateReducer, { isValidTurnOrderState, TURNORDERSTATE } from './TurnOrderStateReducer'


const GAMESTATE = 'GameState'

type GameState = {
  started: boolean
}

const isValidGameState = (state: GameState): state is GameState => (<GameState>state).started !== undefined

export const useGameState = (turnOrderSetup: ITurnOrderSetup) => {
  const [turnOrderState, dispatch] = useReducer(
    TurnOrderStateReducer, {
    deck: [],
    discard: []
  })

  const [gameState, setGameState] = useState<GameState>({
    started: false
  })

  // Game state handling
  const handleStartGame = () => {
    const gameState = { started: true }

    setGameState(gameState)

    dispatch({
      type: 'NEW_ROUND',
      payload: turnOrderSetup.turnOrderCards
    })

    setToDb(GAMESTATE, gameState)
  }

  const handleResetGame = () => {
    const gameState = { started: false }

    setGameState(gameState)

    dispatch({
      type: 'NEW_ROUND',
      payload: turnOrderSetup.turnOrderCards
    })

    setToDb(GAMESTATE, gameState)
  }

  useEffect(() => {
    getFromDb(GAMESTATE)
      .then((state: any) => {
        if (!state) {
          throw 'No game state in DB'
        }
          return state
      })
      .then((gameState) => {
        getFromDb(TURNORDERSTATE)
          .then((state: any) => {
            if (!state) {
              throw 'No turn order state in DB'
            }

            if (isValidTurnOrderState(state)) {
              dispatch({
                type: 'INIT',
                payload: state
              })
            }

            if (isValidGameState(gameState)) {
              setGameState(gameState)
            }
          })
      })
      .catch((err) => {
        console.log(err)
      } /* NoOp */)
  }, [])

  return {
    dispatch,
    gameState,
    handleResetGame,
    handleStartGame,
    turnOrderState
  }
}
