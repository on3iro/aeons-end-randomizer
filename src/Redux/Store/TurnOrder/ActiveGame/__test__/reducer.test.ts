import { Cmd, getCmd, getModel } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import config from 'config'
import * as types from 'aer-types'

import { TURNORDER_GAME_DB_KEY } from 'Redux/Store/TurnOrder/ActiveGame/constants'
import { actions } from 'Redux/Store/TurnOrder/ActiveGame/actions'

import { initialState, Reducer } from 'Redux/Store/TurnOrder/ActiveGame/reducer'

const mockGameState = {
  deck: [
    config.TURNORDERCARDS['player1-1'],
    config.TURNORDERCARDS['player4-1'],
    config.TURNORDERCARDS['player2-1'],
    config.TURNORDERCARDS['nemesis-2'],
  ],
  discard: [
    config.TURNORDERCARDS['player3-1'],
    config.TURNORDERCARDS['nemesis-1'],
  ],
  started: true,
  round: 4,
}

const mockGameEndState = {
  deck: [],
  discard: [
    config.TURNORDERCARDS['player1-1'],
    config.TURNORDERCARDS['player4-1'],
    config.TURNORDERCARDS['player2-1'],
    config.TURNORDERCARDS['nemesis-2'],
    config.TURNORDERCARDS['player3-1'],
    config.TURNORDERCARDS['nemesis-1'],
  ],
  started: true,
  round: 4,
}

const mockGameStartState = {
  deck: [
    config.TURNORDERCARDS['player1-1'],
    config.TURNORDERCARDS['player4-1'],
    config.TURNORDERCARDS['player2-1'],
    config.TURNORDERCARDS['nemesis-2'],
    config.TURNORDERCARDS['player3-1'],
    config.TURNORDERCARDS['nemesis-1'],
  ],
  discard: [],
  started: true,
  round: 4,
}

const mockGameWithAlternateState = {
  deck: [
    config.TURNORDERCARDS['player1-1'],
    config.TURNORDERCARDS['player1-2'],
    {
      ...config.TURNORDERCARDS['player1-alternating'],
      display: false,
    },
  ],
  discard: [
    config.TURNORDERCARDS['nemesis-2'],
    config.TURNORDERCARDS['player1-3'],
    config.TURNORDERCARDS['nemesis-1'],
  ],
  started: true,
  round: 4,
}

const mockGameWithAlternateEndState = {
  deck: [],
  discard: [
    config.TURNORDERCARDS['player1-1'],
    config.TURNORDERCARDS['player1-2'],
    {
      ...config.TURNORDERCARDS['player1-alternating'],
      display: false,
    },
    config.TURNORDERCARDS['nemesis-2'],
    config.TURNORDERCARDS['player1-3'],
    config.TURNORDERCARDS['nemesis-1'],
  ],
  started: true,
  round: 4,
}

describe('TurnOrder | ActiveGame | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle NOOP')

  it('should handle INIT', () => {
    const result = Reducer(initialState, actions.init(mockGameState))

    expect(result).toEqual(mockGameState)
  })

  it('should handle DRAW', () => {
    const expected = {
      deck: [
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player4-1'],
        config.TURNORDERCARDS['player2-1'],
      ],
      discard: [
        config.TURNORDERCARDS['nemesis-2'],
        config.TURNORDERCARDS['player3-1'],
        config.TURNORDERCARDS['nemesis-1'],
      ],
      started: true,
      round: 4,
    }

    const result = Reducer(mockGameState, actions.draw())

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle DRAW with an alternate card, that is not displayed', () => {
    const expected = {
      deck: [config.TURNORDERCARDS['player1-1']],
      discard: [
        config.TURNORDERCARDS['player1-2'],
        {
          ...config.TURNORDERCARDS['player1-alternating'],
          display: false,
        },
        config.TURNORDERCARDS['nemesis-2'],
        config.TURNORDERCARDS['player1-3'],
        config.TURNORDERCARDS['nemesis-1'],
      ],
      started: true,
      round: 4,
    }

    const result = Reducer(mockGameWithAlternateState, actions.draw())

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle DRAW with an empty deck', () => {
    const result = Reducer(mockGameEndState, actions.draw())

    expect(getModel(result)).toEqual(mockGameEndState)
  })

  it('should handle NEW_ROUND', () => {
    const result = Reducer(
      mockGameEndState,
      actions.newRound(mockGameEndState.discard)
    )

    const model = getModel(result)

    expect(model.deck.length).toBe(6)
    expect(model.deck).toContain(config.TURNORDERCARDS['player1-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player2-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player3-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player4-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['nemesis-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['nemesis-2'])
    expect(model.discard.length).toBe(0)
    expect(model.started).toBe(true)
    expect(model.round).toBe(5)
  })

  it('should handle NEW_ROUND with an alternate card', () => {
    const result = Reducer(
      mockGameWithAlternateEndState,
      actions.newRound(mockGameWithAlternateEndState.discard)
    )

    const alternateCard = {
      ...config.TURNORDERCARDS['player1-alternating'],
      display: true,
    }

    const model = getModel(result)

    expect(model.deck.length).toBe(6)
    expect(model.deck).toContain(config.TURNORDERCARDS['player1-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player1-2'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player1-3'])
    expect(model.deck).toContainEqual(alternateCard)
    expect(model.deck).toContain(config.TURNORDERCARDS['nemesis-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['nemesis-2'])
    expect(model.discard.length).toBe(0)
    expect(model.started).toBe(true)
    expect(model.round).toBe(5)
  })

  it('should handle ADD_TO_TOP', () => {
    const expected = {
      deck: [
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player4-1'],
        config.TURNORDERCARDS['player2-1'],
        config.TURNORDERCARDS['nemesis-2'],
        config.TURNORDERCARDS['player3-1'],
      ],
      discard: [config.TURNORDERCARDS['nemesis-1']],
      started: true,
      round: 4,
    }

    const result = Reducer(mockGameState, actions.addToTop('player3-1'))

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle ADD_TO_TOP if card is not in discard or discard is empty', () => {
    const result = Reducer(mockGameStartState, actions.addToTop('player3-1'))

    expect(getModel(result)).toEqual(mockGameStartState)
  })

  it('should handle ADD_TO_BOTTOM', () => {
    const expected = {
      deck: [
        config.TURNORDERCARDS['player3-1'],
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player4-1'],
        config.TURNORDERCARDS['player2-1'],
        config.TURNORDERCARDS['nemesis-2'],
      ],
      discard: [config.TURNORDERCARDS['nemesis-1']],
      started: true,
      round: 4,
    }

    const result = Reducer(mockGameState, actions.addToBottom('player3-1'))

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle ADD_TO_BOTTOM if card is not in discard or discard is empty', () => {
    const result = Reducer(mockGameStartState, actions.addToBottom('player3-1'))

    expect(getModel(result)).toEqual(mockGameStartState)
  })

  it('should handle SHUFFLE_INTO_DECK', () => {
    const result = Reducer(mockGameState, actions.shuffleIntoDeck('player3-1'))

    const model = getModel(result)

    expect(model.deck.length).toBe(5)
    expect(model.deck).toContain(config.TURNORDERCARDS['player3-1'])
    expect(model.discard.length).toBe(1)
    expect(model.started).toBe(true)
  })

  it('should handle SHUFFLE_INTO_DECK if card is not in discard or discard is empty', () => {
    const result = Reducer(
      mockGameStartState,
      actions.shuffleIntoDeck('player3-1')
    )

    expect(getModel(result)).toEqual(mockGameStartState)
  })

  it('should handle START_GAME default', () => {
    const turnOrderCards: types.ITurnOrderCard[] =
      config.TURNORDERSETUPS['fourPlayers'].variations['default'].turnOrderCards

    const result = Reducer(initialState, actions.startGame(turnOrderCards))

    const model = getModel(result)

    expect(model.deck.length).toBe(6)
    expect(model.deck).toContain(config.TURNORDERCARDS['player1-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player2-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player3-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player4-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['nemesis-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['nemesis-2'])
    expect(model.discard.length).toBe(0)
    expect(model.started).toBe(true)
    expect(model.round).toBe(1)
  })

  it('should handle START_GAME alternate', () => {
    const turnOrderCards: types.ITurnOrderCard[] =
      config.TURNORDERSETUPS['onePlayer'].variations['34alternating']
        .turnOrderCards

    const result = Reducer(initialState, actions.startGame(turnOrderCards))

    const model = getModel(result)

    const alternateCard = {
      ...config.TURNORDERCARDS['player1-alternating'],
      display: true,
    }

    expect(model.deck.length).toBe(6)
    expect(model.deck).toContain(config.TURNORDERCARDS['player1-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player1-2'])
    expect(model.deck).toContain(config.TURNORDERCARDS['player1-3'])
    expect(model.deck).toContainEqual(alternateCard)
    expect(model.deck).toContain(config.TURNORDERCARDS['nemesis-1'])
    expect(model.deck).toContain(config.TURNORDERCARDS['nemesis-2'])
    expect(model.discard.length).toBe(0)
    expect(model.started).toBe(true)
    expect(model.round).toBe(1)
  })

  it('should handle RESET_GAME', () => {
    const expected = {
      deck: [],
      discard: [],
      started: false,
      round: 1,
    }

    const result = Reducer(mockGameState, actions.resetGame())

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle FETCH_FROM_DB', () => {
    const result = Reducer(initialState, actions.fetchFromDB())

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(initialState)

    expect(cmd).toEqual(
      Cmd.run(getFromDb, {
        args: [TURNORDER_GAME_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      initialState,
      actions.fetchFromDBSuccessful(mockGameState)
    )

    expect(getModel(result)).toEqual(mockGameState)
  })

  it('should handle FETCH_FROM_DB_SUCCESS for undefined state', () => {
    const result = Reducer(
      initialState,
      // @ts-ignore
      actions.fetchFromDBSuccessful(undefined)
    )

    expect(getModel(result)).toEqual(initialState)
  })

  it.todo('should handle FETCH_FROM_DB_FAILURE')
  it.todo('should handle SET_TURNORDER_TO_DB_SUCCESS')
  it.todo('should handle SET_TURNORDER_TO_DB_FAILURE')
})
