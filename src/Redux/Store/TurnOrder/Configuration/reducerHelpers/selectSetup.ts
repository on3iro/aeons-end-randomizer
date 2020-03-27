import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { TURNORDER_CONFIG_DB_KEY } from '../constants'
import { actions } from '../actions'

export const selectSetup = (
  state: State,
  action: ReturnType<typeof actions.selectSetup>
) => {
  const newState = {
    ...state,
    SelectedSetup: state.SelectedPlayerCount.variations[action.payload],
  }
  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [TURNORDER_CONFIG_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
