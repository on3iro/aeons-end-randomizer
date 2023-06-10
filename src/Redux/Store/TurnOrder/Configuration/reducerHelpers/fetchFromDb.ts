import { loop, Cmd } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import { State } from '../types'
import { TURNORDER_CONFIG_DB_KEY } from '../constants'
import { actions } from '../actions'

import {
  actions as activeGameActions,
  Action as ActiveGameAction,
} from 'Redux/Store/TurnOrder/ActiveGame'

export const fetchFromDb = (state: State) => {
  return loop(
    state,
    Cmd.run(getFromDb, {
      args: [TURNORDER_CONFIG_DB_KEY],
      successActionCreator: actions.fetchFromDBSuccessful,
      failActionCreator: actions.fetchFromDBFailed,
    })
  )
}

export const fetchFromDbSuccess = (
  state: State,
  action: ReturnType<typeof actions.fetchFromDBSuccessful>
) => {
  // If the fetched state somehow is undefined just take the current state instead
  const newState =
    typeof action.payload === 'object' && action.payload !== null
      ? (action.payload as State)
      : state

  return loop(
    newState,
    // If we could load the configuration also load the actual
    // turnorder game state
    Cmd.action<ActiveGameAction>(activeGameActions.fetchFromDB())
  )
}
