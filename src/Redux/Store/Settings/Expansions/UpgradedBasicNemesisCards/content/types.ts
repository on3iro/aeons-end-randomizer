import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'aer-types'

import { actions } from './actions'
import { LanguageKey } from '../../types'

type LanguageContent = { [id: string]: types.UpgradedBasicNemesisCard }

export type State = Readonly<
  {
    [key in LanguageKey]: LanguageContent
  }
>

export enum ActionTypes {}

export type Action = ActionsUnion<typeof actions>

export type UpgradedBasicNemesisCardContentStateSlice = {
  Settings: {
    Expansions: {
      UpgradedBasicNemesisCards: {
        content: State
      }
    }
  }
}
