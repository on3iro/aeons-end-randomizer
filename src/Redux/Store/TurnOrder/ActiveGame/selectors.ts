import {
  DeckStateSlice,
  DiscardStateSlice,
  StartedStateSlice,
  RoundStateSlice,
} from './types'

const getDeck = (state: DeckStateSlice) => state.TurnOrder.ActiveGame.deck

const getDiscard = (state: DiscardStateSlice) =>
  state.TurnOrder.ActiveGame.discard

const getHasStarted = (state: StartedStateSlice) =>
  state.TurnOrder.ActiveGame.started

const getRoundCount = (state: RoundStateSlice) =>
  state.TurnOrder.ActiveGame.round

export const selectors = {
  getDeck,
  getDiscard,
  getHasStarted,
  getRoundCount,
}
