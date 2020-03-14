import { createSelector } from 'reselect'

import { RootState } from 'Redux/Store'

import { adjustSetup } from './helpers'

const getMode = (state: RootState) => state.TurnOrder.Configuration.Mode
const getSelectedPlayerCount = (state: RootState) =>
  state.TurnOrder.Configuration.SelectedPlayerCount
const getSelectedSetup = (state: RootState) =>
  state.TurnOrder.Configuration.SelectedSetup
const getConfiguration = createSelector(
  [getMode, getSelectedSetup],
  (mode, selectedSetup) => adjustSetup(mode, selectedSetup)
)
const getAvailableCards = createSelector(
  [getConfiguration],
  config => config.turnOrderCards
)

export const selectors = {
  getMode,
  getSelectedPlayerCount,
  getSelectedSetup,
  getConfiguration,
  getAvailableCards,
}
