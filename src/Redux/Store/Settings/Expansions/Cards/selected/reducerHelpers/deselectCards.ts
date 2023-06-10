import { Cmd, loop } from 'redux-loop'

import { State } from '../types'
import { actions } from '../actions'
import { setSelectedCardsToDB } from '../sideEffects'

export const deselectCards = (
  state: State,
  action: ReturnType<typeof actions.deselectCards>
) => {
  const newState = state.filter((id) => !action.payload.includes(id))

  return loop(
    newState,
    Cmd.run(setSelectedCardsToDB, {
      args: [newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
