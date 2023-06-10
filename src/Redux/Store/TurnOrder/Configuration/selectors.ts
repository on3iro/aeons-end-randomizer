import { createSelector } from 'reselect'

import {
  ModeStateSlice,
  SelectedPlayerCountStateSlice,
  SelectedSetupStateSlice,
} from './types'

import { adjustSetup } from './helpers'

const getMode = (state: ModeStateSlice) => state.TurnOrder.Configuration.Mode

const getSelectedPlayerCount = (state: SelectedPlayerCountStateSlice) =>
  state.TurnOrder.Configuration.SelectedPlayerCount

const getSelectedSetup = (state: SelectedSetupStateSlice) =>
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
