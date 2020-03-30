import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { EXPANSIONS_DB_KEY } from '../constants'
import { allExpansionsAreSelected } from '../helpers'
import { actions } from '../actions'

export const toggleAll = (state: State) => {
  const allExpansionsSelected = allExpansionsAreSelected(state.expansions)
  const newExpansionsState = Object.values(state.expansions).reduce(
    (acc, exp) => ({
      ...acc,
      [exp.id]: {
        ...exp,
        selected: !allExpansionsSelected,
      },
    }),
    {}
  )

  const newState: State = {
    ...state,
    expansions: newExpansionsState,
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
