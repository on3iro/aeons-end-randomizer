import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { BASIC_NEMESIS_CARDS_DB_KEY } from '../constants'
import { actions } from '../actions'

export const toggleCard = (
  state: State,
  action: ReturnType<typeof actions.toggleCard>
) => {
  const newState = {
    ...state,
    basicNemesisCards: {
      ...state.basicNemesisCards,
      [action.payload]: {
        ...state.basicNemesisCards[action.payload],
        selected: !state.basicNemesisCards[action.payload].selected,
      },
    },
  }

  const selectedCardsToSave = state.basicNemesisCardIds.filter(
    id => newState.basicNemesisCards[id].selected
  )

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [BASIC_NEMESIS_CARDS_DB_KEY, selectedCardsToSave],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
