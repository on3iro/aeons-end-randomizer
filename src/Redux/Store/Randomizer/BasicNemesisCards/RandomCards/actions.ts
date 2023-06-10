import { createAction } from '@martin_hotell/rex-tils'

import * as types from 'aer-types/types'

import { ActionTypes } from './types'

import { PlayerCount } from '../PlayerCount/types'

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  createBasicNemesisCardDeck: (
    availableCards: ReadonlyArray<types.BasicNemesisCard>,
    playerCount: PlayerCount,
    seed?: types.Seed
  ) => createAction(ActionTypes.CREATE, { availableCards, playerCount, seed }),
}
