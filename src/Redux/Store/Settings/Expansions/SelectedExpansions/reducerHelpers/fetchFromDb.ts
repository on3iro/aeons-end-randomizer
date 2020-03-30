import { loop, Cmd } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import { State } from '../types'
import { EXPANSIONS_DB_KEY } from '../constants'
import { initialState } from '../reducer'
import { actions } from '../actions'

export const fetchFromDb = (state: State) => {
  return loop(
    state,
    Cmd.run(getFromDb, {
      args: [EXPANSIONS_DB_KEY],
      successActionCreator: actions.fetchFromDBSuccessful,
      failActionCreator: actions.fetchFromDBFailed,
    })
  )
}

export const fetchFromDbSuccess = (
  state: State,
  action: ReturnType<typeof actions.fetchFromDBSuccessful>
) => {
  if (!action.payload) {
    return initialState
  }

  const selectedExpansions: string[] = action.payload
  const newState = Object.values(state.expansions).reduce(
    (acc, exp) => ({
      ...acc,
      expansions: {
        ...acc.expansions,
        [exp.id]: {
          ...exp,
          selected: selectedExpansions.includes(exp.id),
        },
      },
    }),
    state
  )

  return newState || initialState
}
