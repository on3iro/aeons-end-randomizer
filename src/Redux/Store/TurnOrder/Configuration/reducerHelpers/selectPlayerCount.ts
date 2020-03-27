import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import config from 'config'

import { State } from '../types'
import { TURNORDER_CONFIG_DB_KEY } from '../constants'
import { actions } from '../actions'

export const selectPlayerCount = (
  state: State,
  action: ReturnType<typeof actions.selectPlayerCount>
) => {
  const newState = {
    ...state,
    SelectedPlayerCount: config.TURNORDERSETUPS[action.payload],
    SelectedSetup: config.TURNORDERSETUPS[action.payload].variations['default'],
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
