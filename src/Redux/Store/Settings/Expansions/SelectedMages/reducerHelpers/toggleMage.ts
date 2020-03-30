import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { MAGES_DB_KEY } from '../constants'
import { actions } from '../actions'

export const toggleMage = (
  state: State,
  action: ReturnType<typeof actions.toggleMage>
) => {
  const newState = {
    ...state,
    mages: {
      ...state.mages,
      [action.payload]: {
        ...state.mages[action.payload],
        selected: !state.mages[action.payload].selected,
      },
    },
  }

  const selectedCardsToSave = state.mageIds.filter(
    id => newState.mages[id].selected
  )

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [MAGES_DB_KEY, selectedCardsToSave],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
