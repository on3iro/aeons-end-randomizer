import { createAction } from '@martin_hotell/rex-tils'

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
}
