import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { LANGUAGE_DB_KEY } from '../constants'
import { actions } from '../actions'

export const select = (
  state: State,
  action: ReturnType<typeof actions.select>
) => {
  const { expansionId, lang } = action.payload
  const newState = {
    ...state,
    [expansionId]: lang,
  }

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [LANGUAGE_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
