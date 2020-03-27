import { DeckStateSlice, DiscardStateSlice, StartedStateSlice } from './types'

const getDeck = (state: DeckStateSlice) => state.TurnOrder.ActiveGame.deck

const getDiscard = (state: DiscardStateSlice) =>
  state.TurnOrder.ActiveGame.discard

const getHasStarted = (state: StartedStateSlice) =>
  state.TurnOrder.ActiveGame.started

export const selectors = {
  getDeck,
  getDiscard,
  getHasStarted,
}
