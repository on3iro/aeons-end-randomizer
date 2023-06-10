import { loop, Cmd } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'
import AERData from 'aer-data/src/index'

import { State } from '../types'
import { LANGUAGE_DB_KEY } from '../constants'
import { initialState } from '../reducer'
import { actions } from '../actions'

export const fetchFromDb = (state: State) => {
  return loop(
    state,
    Cmd.run(getFromDb, {
      args: [LANGUAGE_DB_KEY],
      successActionCreator: actions.fetchFromDBSuccessful,
      failActionCreator: actions.fetchFromDBFailed,
    })
  )
}

export const fetchFromDbSuccess = (
  _: State,
  action: ReturnType<typeof actions.fetchFromDBSuccessful>
) => {
  if (typeof action.payload === 'object' && action.payload !== null) {
    const newState = action.payload as State

    // WHY:
    // When expensions are newly added to aer-data, they will never be part of a users saved state.
    // This leads to a situation, where our default (ENG) won't be selected for these expansions, which
    // might lead to a crash of the app.
    // TODO - handle the default gracefully, so we do no longer need this workaround
    const withDefaultValuesForUnselectedExpansions = AERData.normalizedData.ENG.expansionIds.reduce(
      (acc, id) => {
        if (!(id in newState)) {
          return { ...acc, [id]: 'ENG' }
        } else {
          return acc
        }
      },
      action.payload
    )

    return withDefaultValuesForUnselectedExpansions as State
  }
  return initialState
}
