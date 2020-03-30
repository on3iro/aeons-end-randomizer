import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { TREASURES_DB_KEY } from '../constants'
import { actions } from '../actions'

export const toggleCard = (
  state: State,
  action: ReturnType<typeof actions.toggleCard>
) => {
  const newState = {
    ...state,
    treasures: {
      ...state.treasures,
      [action.payload]: {
        ...state.treasures[action.payload],
        selected: !state.treasures[action.payload].selected,
      },
    },
  }

  const selectedCardsToSave = state.treasureIds.filter(
    id => newState.treasures[id].selected
  )

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [TREASURES_DB_KEY, selectedCardsToSave],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
