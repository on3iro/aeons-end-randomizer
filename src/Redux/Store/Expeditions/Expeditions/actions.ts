import { createAction } from '@martin_hotell/rex-tils'

import * as types from 'types'

import { ActionTypes, State, BaseConfig, RewardType } from './types'

export const actions = {
  createExpedition: (baseConfig: BaseConfig) =>
    createAction(ActionTypes.CREATE_EXPEDITION, { baseConfig }),
  createExpeditionSuccess: (newExpedition: types.Expedition) =>
    createAction(ActionTypes.CREATE_EXPEDITION_SUCCESS, newExpedition),
  rollBattle: (battle: types.OldStyleBattle) =>
    createAction(ActionTypes.ROLL_BATTLE, { battle }),
  rollBattleSuccess: (result: {
    battle: types.OldStyleBattle
    upgradedBasicNemesisCardIds: string[]
    nemesisSeedState: types.ExpeditionSeedState
  }) => createAction(ActionTypes.ROLL_BATTLE_SUCCESS, result),
  startBattle: (battle: types.OldStyleBattle) =>
    createAction(ActionTypes.START_BATTLE, { battle }),
  winBattle: (battle: types.OldStyleBattle) =>
    createAction(ActionTypes.WIN_BATTLE, battle),
  winBattleSuccess: (result: {
    battle: types.OldStyleBattle
    seed: types.Seed
  }) => createAction(ActionTypes.WIN_BATTLE_SUCCESS, result),
  loseBattle: (battle: types.OldStyleBattle) =>
    createAction(ActionTypes.LOSE_BATTLE, { battle }),
  acceptLoss: (
    battle: types.OldStyleBattle,
    banished: string[],
    newSupplyIds: string[]
  ) =>
    createAction(ActionTypes.ACCEPT_LOSS, { battle, banished, newSupplyIds }),
  rollLoss: (battle: types.OldStyleBattle, rewardType: RewardType) =>
    createAction(ActionTypes.ROLL_LOSS, { battle, rewardType }),
  rollLossSuccess: (result: types.OldStyleBattle & { seed: types.Seed }) =>
    createAction(ActionTypes.ROLL_LOSS_SUCCESS, result),
  finishBattle: (
    battle: types.OldStyleBattle,
    newSupplyIds: string[],
    banished: string[]
  ) =>
    createAction(ActionTypes.FINISH_BATTLE, { battle, newSupplyIds, banished }),
  finishExpedition: (battle: types.OldStyleBattle) =>
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
  migrateToSettingsSnapshotSuccessful: (state: State) =>
    createAction(ActionTypes.SETTINGS_SNAPSHOT_MIGRATION_SUCCESS, state),
  shareExpedition: (expedition: types.Expedition) =>
    createAction(ActionTypes.EXPEDITION_SHARE, { expedition }),
  shareExpeditionSuccess: () =>
    createAction(ActionTypes.EXPEDITION_SHARE_SUCCESS),
  shareExpeditionFailure: () =>
    createAction(ActionTypes.EXPEDITION_SHARE_FAILURE),
}
