import { Cmd, loop } from 'redux-loop'

import { State } from '../types'
import { actions } from '../actions'
import { setSelectedCardsToDB } from '../sideEffects'

export const toggleCard = (
  state: State,
  action: ReturnType<typeof actions.toggleCard>
) => {
  const newState = state.includes(action.payload)
    ? state.filter((id) => id !== action.payload)
    : [...state, action.payload]

  return loop(
    newState,
    Cmd.run(setSelectedCardsToDB, {
      args: [newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
