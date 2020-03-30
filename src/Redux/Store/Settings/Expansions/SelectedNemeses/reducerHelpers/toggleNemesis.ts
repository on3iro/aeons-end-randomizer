import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { NEMESES_DB_KEY } from '../constants'
import { actions } from '../actions'

export const toggleNemesis = (
  state: State,
  action: ReturnType<typeof actions.toggleNemesis>
) => {
  const newState = {
    ...state,
    nemeses: {
      ...state.nemeses,
      [action.payload]: {
        ...state.nemeses[action.payload],
        selected: !state.nemeses[action.payload].selected,
      },
    },
  }

  const selectedCardsToSave = state.nemesisIds.filter(
    id => newState.nemeses[id].selected
  )

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [NEMESES_DB_KEY, selectedCardsToSave],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
