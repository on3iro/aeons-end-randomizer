import { Cmd, loop } from 'redux-loop'

import { State } from '../types'
import { actions } from '../actions'
import { setSelectedFoesToDB } from '../sideEffects'

export const toggle = (
  state: State,
  action: ReturnType<typeof actions.toggle>
) => {
  const newState = state.includes(action.payload)
    ? state.filter((id) => id !== action.payload)
    : [...state, action.payload]

  return loop(
    newState,
    Cmd.run(setSelectedFoesToDB, {
      args: [newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
