import { createAction } from '@martin_hotell/rex-tils'

import { ActionTypes, Snackbar } from './types'

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  queue: (snackbarContent: Snackbar) =>
    createAction(ActionTypes.QUEUE, snackbarContent),
  dequeue: () => createAction(ActionTypes.DEQUEUE),
}
