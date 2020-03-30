import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { CARDS_DB_KEY } from '../constants'
import { actions } from '../actions'

export const toggleCard = (
  state: State,
  action: ReturnType<typeof actions.toggleCard>
) => {
  const newState = {
    ...state,
    cards: {
      ...state.cards,
      [action.payload]: {
        ...state.cards[action.payload],
        selected: !state.cards[action.payload].selected,
      },
    },
  }

  const selectedCardsToSave = state.cardIds.filter(
    id => newState.cards[id].selected
  )

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [CARDS_DB_KEY, selectedCardsToSave],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
