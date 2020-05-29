import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'
import { LanguageKey } from '../types'

export type State = {
  [expansionId: string]: LanguageKey
}

export enum ActionTypes {
  SELECT = 'Settings/Expansions/Languages/SELECT',
  SET_TO_DB = 'Settings/Expansions/Languages/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/Languages/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/Languages/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/Languages/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/Languages/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/Languages/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedLanguagesStateSlice = {
  Settings: {
    Expansions: {
      Languages: State
    }
  }
}
