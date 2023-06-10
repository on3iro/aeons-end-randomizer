import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type SnackbarType = 'default' | 'error' | 'success'

export type Snackbar = {
  type: SnackbarType
  message: string
}

export type State = {
  queue: Snackbar[]
}

export enum ActionTypes {
  QUEUE = 'Snackbars/QUEUE',
  DEQUEUE = 'Snackbars/DEQUEUE',
}

export type Action = ActionsUnion<typeof actions>

export type SnackbarsStateSlice = {
  Snackbars: State
}
