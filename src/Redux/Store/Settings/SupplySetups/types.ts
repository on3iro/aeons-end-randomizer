import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'aer-types/types'

import { actions } from './actions'

export type State = {
  Predefined: types.MarketSetups
  Custom: types.MarketSetups
  migrationVersion: number
}

export const isSupplySetupState = (value: unknown): value is State => {
  if (typeof value !== 'object' || !value) {
    return false
  } else {
    return 'Predefined' in value && 'Custom' in value
  }
}

export enum ActionTypes {
  TOGGLE_ALL = 'Settings/SupplySetups/TOGGLE_ALL',
  TOGGLE_SETUP = 'Settings/SupplySetups/TOGGLE_SETUP',
  SAVE_CUSTOM_SETUP = 'Settings/SupplySetups/SAVE_CUSTOM_SETUP',
  CANCEL_EDIT_SETUP = 'Settings/SupplySetups/CANCEL_EDIT_SETUP',
  EDIT_CUSTOM_SETUP = 'Settings/SupplySetups/EDIT_CUSTOM_SETUP',
  DELETE_CUSTOM_SETUP = 'Settings/SupplySetups/DELETE_CUSTOM_SETUP',
  SET_TO_DB = 'Settings/SupplySetups/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/SupplySetups/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/SupplySetups/SET_TO_DB_FAILURE',
  MIGRATION_SUCCESS = 'Settings/SupplySetups/MIGRATION_SUCCESS',
  FETCH_FROM_DB = 'Settings/SupplySetups/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/SupplySetups/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/SupplySetups/FETCH_FROM_DB_FAILURE',
}

export type SetupType = 'Predefined' | 'Custom'

export type Action = ActionsUnion<typeof actions>

export type SupplySetupsStateSlice = {
  Settings: {
    SupplySetups: State
  }
}

export type PredefinedSupplySetupsStateSlice = {
  Settings: {
    SupplySetups: {
      Predefined: {
        setups: { [id: string]: types.IMarketSetup }
      }
    }
  }
}

export type PredefinedSupplySetupIdsStateSlice = {
  Settings: {
    SupplySetups: {
      Predefined: {
        ids: string[]
      }
    }
  }
}

export type CustomSupplySetupsStateSlice = {
  Settings: {
    SupplySetups: {
      Custom: {
        setups: { [id: string]: types.IMarketSetup }
      }
    }
  }
}

export type CustomSupplySetupIdsStateSlice = {
  Settings: {
    SupplySetups: {
      Custom: {
        ids: string[]
      }
    }
  }
}
