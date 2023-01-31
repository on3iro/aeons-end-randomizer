import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'
import { GlobalLanguageKey } from '../types'

export type State = GlobalLanguageKey

export enum ActionTypes {
  SELECT = 'Settings/Expansions/GlobalLanguage/SELECT',
  SET_TO_DB = 'Settings/Expansions/GlobalLanguage/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/GlobalLanguage/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/GlobalLanguage/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/GlobalLanguage/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/GlobalLanguage/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/GlobalLanguage/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedGlobalLanguageStateSlice = {
  Settings: {
    Expansions: {
      GlobalLanguage: State
    }
  }
}
