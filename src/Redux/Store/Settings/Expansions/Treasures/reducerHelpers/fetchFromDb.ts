import { loop, Cmd } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import { State } from '../types'
import { TREASURES_DB_KEY } from '../constants'
import { initialState } from '../reducer'
import { actions } from '../actions'

export const fetchFromDb = (state: State) => {
  return loop(
    state,
    Cmd.run(getFromDb, {
      args: [TREASURES_DB_KEY],
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

  const selectedCards: string[] = action.payload
  const newState = Object.values(state.treasures).reduce(
    (acc, treasure) => ({
      ...acc,
      treasures: {
        ...acc.treasures,
        [treasure.id]: {
          ...treasure,
          selected: selectedCards.includes(treasure.id),
        },
      },
    }),
    state
  )

  return newState || initialState
}
