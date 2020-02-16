import { createAction } from '@martin_hotell/rex-tils'

import { ActionTypes, PlayerCount } from './types'

export const actions = {
  setCount: (count: PlayerCount) => createAction(ActionTypes.SET, count),
  noOp: () => createAction('NOOP'),
}
