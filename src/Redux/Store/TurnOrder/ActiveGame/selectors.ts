import * as types from 'types'

const getDeck = (state: {
  TurnOrder: {
    ActiveGame: {
      deck: types.ITurnOrderCard[]
    }
  }
}) => state.TurnOrder.ActiveGame.deck

const getDiscard = (state: {
  TurnOrder: {
    ActiveGame: {
      discard: types.ITurnOrderCard[]
    }
  }
}) => state.TurnOrder.ActiveGame.discard

const getHasStarted = (state: {
  TurnOrder: {
    ActiveGame: {
      started: boolean
    }
  }
}) => state.TurnOrder.ActiveGame.started

export const selectors = {
  getDeck,
  getDiscard,
  getHasStarted,
}
