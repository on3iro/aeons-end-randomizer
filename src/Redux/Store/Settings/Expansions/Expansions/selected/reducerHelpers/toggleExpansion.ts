import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { EXPANSIONS_DB_KEY } from '../../constants'
import { actions } from '../actions'

export const toggleExpansion = (
  state: State,
  action: ReturnType<typeof actions.toggleExpansion>
) => {
  const newState = state.includes(action.payload)
    ? state.filter(id => id !== action.payload)
    : [...state, action.payload]

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [EXPANSIONS_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
