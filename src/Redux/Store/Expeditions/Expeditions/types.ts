import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'types'

import { actions } from './actions'

export enum ActionTypes {
  CREATE_EXPEDITION = 'Expeditions/Expeditions/CREATE_EXPEDITION',
  CREATE_EXPEDITION_SUCCESS = 'Expeditions/Expeditions/CREATE_EXPEDITION_SUCCESS',
  DELETE_EXPEDITION = 'Expeditions/Expeditions/DELETE_EXPEDITION',
  ROLL_BATTLE = 'Expeditions/Expeditions/ROLL_BATTLE',
  ROLL_BATTLE_SUCCESS = 'Expeditions/Expeditions/ROLL_BATTLE_SUCCESS',
  START_BATTLE = 'Expeditions/Expeditions/START_BATTLE',
  WIN_BATTLE = 'Expeditions/Expeditions/WIN_BATTLE',
  WIN_BATTLE_SUCCESS = 'Expeditions/Expeditions/WIN_BATTLE_SUCCESS',
  LOSE_BATTLE = 'Expeditions/Expeditions/LOSE_BATTLE',
  ROLL_LOSS = 'Expeditions/Expeditions/ROLL_LOSS',
  ROLL_LOSS_SUCCESS = 'Expeditions/Expeditions/ROLL_LOSS_SUCCESS',
  ACCEPT_LOSS = 'Expeditions/Expeditions/ACCEPT_LOSS',
  FINISH_BATTLE = 'Expeditions/Expeditions/FINISH_BATTLE',
  FINISH_EXPEDITION = 'Expeditions/Expeditions/FINISH_EXPEDITION',
  SET_TO_DB = 'Expeditions/Expeditions/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Expeditions/Expeditions/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Expeditions/Expeditions/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Expeditions/Expeditions/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Expeditions/Expeditions/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Expeditions/Expeditions/FETCH_FROM_DB_FAILURE',
  SETTINGS_SNAPSHOT_MIGRATION_SUCCESS = 'Expeditions/Expeditions/SETTINGS_SNAPSHOT_MIGRATION_SUCCESS',
}

export type Action = ActionsUnion<typeof actions>

export type State = {
  expeditions: types.Expeditions
  expeditionIds: string[]
}

export type BaseConfig = {
  variantId: string
  name: string
  bigPocketVariant: boolean
  marketId: string
}

export type WinConfig = {
  battle: types.Battle
  treasureIds: string[]
  gemIds: string[]
  relicIds: string[]
  spellIds: string[]
}

export type RollLossType =
  | 'mage'
  | 'gem'
  | 'relic'
  | 'spell'
  | 'treasure1'
  | 'treasure2'
  | 'treasure3'

export type LossConfig = {
  battle: types.Battle
  type: RollLossType
  mageIds: string[]
  gemIds: string[]
  relicIds: string[]
  spellIds: string[]
  treasure1Ids: string[]
  treasure2Ids: string[]
  treasure3Ids: string[]
}
