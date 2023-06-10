import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { GLOBAL_LANGUAGE_DB_KEY } from '../constants'
import { actions } from '../actions'

export const select = (action: ReturnType<typeof actions.select>) => {
  const { lang } = action.payload
  const newState = lang

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [GLOBAL_LANGUAGE_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
