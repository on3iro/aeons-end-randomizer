import { createAction } from '@martin_hotell/rex-tils'

import * as types from 'aer-types/types'

import { ActionTypes, State, BaseConfig, RewardType } from './types'

export type InputBranch = {
  id: string
  expeditionId: string
  rewards?: types.Rewards
}

export const actions = {
  createExpedition: (baseConfig: BaseConfig) =>
    createAction(ActionTypes.CREATE_EXPEDITION, { baseConfig }),
  createExpeditionSuccess: (newExpedition: types.Expedition) =>
    createAction(ActionTypes.CREATE_EXPEDITION_SUCCESS, newExpedition),
  rollBattle: (battle: types.Battle) =>
    createAction(ActionTypes.ROLL_BATTLE, { battle }),
  rollBattleSuccess: (result: {
    battle: types.Battle
    upgradedBasicNemesisCardIds: string[]
    nemesisSeedState: types.ExpeditionSeedState
  }) => createAction(ActionTypes.ROLL_BATTLE_SUCCESS, result),
  startBattle: (battle: types.Battle) =>
    createAction(ActionTypes.START_BATTLE, { battle }),
  winBattle: (battle: types.Battle) =>
    createAction(ActionTypes.WIN_BATTLE, battle),
  winBattleSuccess: (result: { battle: types.Battle; seed: types.Seed }) =>
    createAction(ActionTypes.WIN_BATTLE_SUCCESS, result),
  loseBattle: (battle: types.Battle) =>
    createAction(ActionTypes.LOSE_BATTLE, { battle }),
  acceptLoss: (
    battle: InputBranch,
    banished: string[],
    newSupplyIds: string[]
  ) =>
    createAction(ActionTypes.ACCEPT_LOSS, { battle, banished, newSupplyIds }),
  rollLoss: (battle: types.Battle, rewardType: RewardType) =>
    createAction(ActionTypes.ROLL_LOSS, { battle, rewardType }),
  rollLossSuccess: (result: types.Battle & { seed: types.Seed }) =>
    createAction(ActionTypes.ROLL_LOSS_SUCCESS, result),
  finishBattle: (
    battle: InputBranch,
    banished: string[],
    newSupplyIds: string[]
  ) =>
    createAction(ActionTypes.FINISH_BATTLE, { battle, newSupplyIds, banished }),
  finishExpedition: (branch: types.Branch) =>
    createAction(ActionTypes.FINISH_EXPEDITION, { branch }),
  deleteExpedition: (id: string) =>
    createAction(ActionTypes.DELETE_EXPEDITION, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: unknown) =>
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
  resolveNarrative: (config: {
    expeditionId: string
    narrativeId: string
    decision: number
  }) => createAction(ActionTypes.NARRATIVE_RESOLVE, config),
  generateRewards: (config: { reward: types.Reward }) =>
    createAction(ActionTypes.REWARDS_GENERATE, config),
  generateRewardsSuccess: (result: {
    seed: types.Seed
    rewards: types.Rewards
    expeditionId: string
    branchId: string
  }) => createAction(ActionTypes.REWARDS_GENERATE_SUCCESS, result),
  acceptRewards: (
    reward: {
      id: string
      expeditionId: string
      rewards?: types.Rewards
      nextBranchId?: string
    },
    banished: string[],
    newSupplyIds: string[]
  ) =>
    createAction(ActionTypes.REWARDS_ACCEPT, {
      reward,
      banished,
      newSupplyIds,
    }),
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
}
