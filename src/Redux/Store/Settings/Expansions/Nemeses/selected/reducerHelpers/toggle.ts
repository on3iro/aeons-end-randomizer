import { Cmd, loop } from 'redux-loop'

import { State } from '../types'
import { actions } from '../actions'
import { setSelectedNemesesToDB } from '../sideEffects'

export const toggle = (
  state: State,
  action: ReturnType<typeof actions.toggle>
) => {
  const newState = state.includes(action.payload)
    ? state.filter((id) => id !== action.payload)
    : [...state, action.payload]

  return loop(
    newState,
    Cmd.run(setSelectedNemesesToDB, {
      args: [newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
