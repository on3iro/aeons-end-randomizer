import { createAction } from '@martin_hotell/rex-tils'

import * as types from 'types'

import {
  ActionTypes,
  State,
  BaseConfig,
  LossConfig,
  RollBattleConfig,
  WinConfig,
} from './types'

import {
  createBattle,
  createExpeditionConfig,
  rollLossRewards,
  rollWinRewards,
} from './helpers'

export const actions = {
  createExpedition: (baseConfig: BaseConfig) =>
    createAction(
      ActionTypes.CREATE_EXPEDITION,
      createExpeditionConfig(baseConfig)
    ),
  rollBattle: (config: RollBattleConfig) =>
    createAction(ActionTypes.ROLL_BATTLE, createBattle(config)),
  startBattle: (battle: types.Battle) =>
    createAction(ActionTypes.START_BATTLE, { battle }),
  winBattle: (config: WinConfig) =>
    createAction(ActionTypes.WIN_BATTLE, rollWinRewards(config)),
  loseBattle: (battle: types.Battle) =>
    createAction(ActionTypes.LOSE_BATTLE, { battle }),
  acceptLoss: (
    battle: types.Battle,
    banished: string[],
    newSupplyIds: string[]
  ) =>
    createAction(ActionTypes.ACCEPT_LOSS, { battle, banished, newSupplyIds }),
  rollLoss: (config: LossConfig) =>
    createAction(ActionTypes.ROLL_LOSS, rollLossRewards(config)),
  finishBattle: (
    battle: types.Battle,
    newSupplyIds: string[],
    banished: string[]
  ) =>
    createAction(ActionTypes.FINISH_BATTLE, { battle, newSupplyIds, banished }),
  finishExpedition: (battle: types.Battle) =>
    createAction(ActionTypes.FINISH_EXPEDITION, { battle }),
  deleteExpedition: (id: string) =>
    createAction(ActionTypes.DELETE_EXPEDITION, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: State) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}
