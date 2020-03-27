import { createSelector } from 'reselect'

import * as types from 'types'

import { adjustSetup } from './helpers'

const getMode = (state: {
  TurnOrder: {
    Configuration: {
      Mode: types.Mode
    }
  }
}) => state.TurnOrder.Configuration.Mode

const getSelectedPlayerCount = (state: {
  TurnOrder: {
    Configuration: {
      SelectedPlayerCount: types.ITurnOrderPlayerCount
    }
  }
}) => state.TurnOrder.Configuration.SelectedPlayerCount

const getSelectedSetup = (state: {
  TurnOrder: {
    Configuration: {
      SelectedSetup: types.ITurnOrderSetup
    }
  }
}) => state.TurnOrder.Configuration.SelectedSetup

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
