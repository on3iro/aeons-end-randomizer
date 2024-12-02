import { createSelector } from 'reselect'

import {
  ModeStateSlice,
  FriendStateSlice,
  FoeStateSlice,
  SelectedPlayerCountStateSlice,
  SelectedSetupStateSlice,
} from './types'

import { adjustSetup } from './helpers'

const getMode = (state: ModeStateSlice) => state.TurnOrder.Configuration.Mode

const getFriend = (state: FriendStateSlice) => state.TurnOrder.Configuration.Friend

const getFoe = (state: FoeStateSlice) => state.TurnOrder.Configuration.Foe

const getSelectedPlayerCount = (state: SelectedPlayerCountStateSlice) =>
  state.TurnOrder.Configuration.SelectedPlayerCount

const getSelectedSetup = (state: SelectedSetupStateSlice) =>
  state.TurnOrder.Configuration.SelectedSetup

const getConfiguration = createSelector(
  [getMode, getFriend, getFoe, getSelectedSetup],
  (mode, friend, foe, selectedSetup) => adjustSetup(mode, friend, foe, selectedSetup)
)

const getAvailableCards = createSelector(
  [getConfiguration],
  config => config.turnOrderCards
)

export const selectors = {
  getMode,
  getFriend,
  getFoe,
  getSelectedPlayerCount,
  getSelectedSetup,
  getConfiguration,
  getAvailableCards,
}
