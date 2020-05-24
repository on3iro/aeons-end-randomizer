import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { MAGES_DB_KEY } from '../../constants'
import { actions } from '../actions'

export const toggle = (
  state: State,
  action: ReturnType<typeof actions.toggle>
) => {
  const newState = state.includes(action.payload)
    ? state.filter(id => id !== action.payload)
    : [...state, action.payload]

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [MAGES_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
