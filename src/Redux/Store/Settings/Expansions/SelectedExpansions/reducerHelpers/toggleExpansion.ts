import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { EXPANSIONS_DB_KEY } from '../constants'
import { actions } from '../actions'

export const toggleExpansion = (
  state: State,
  action: ReturnType<typeof actions.toggleExpansion>
) => {
  const newState = {
    ...state,
    expansions: {
      ...state.expansions,
      [action.payload]: {
        ...state.expansions[action.payload],
        selected: !state.expansions[action.payload].selected,
      },
    },
  }

  const selectedExpansionsToSave = state.expansionIds.filter(
    id => newState.expansions[id].selected
  )

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [EXPANSIONS_DB_KEY, selectedExpansionsToSave],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
