import { Cmd, loop } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import { UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY } from '../constants'
import { actions } from '../actions'

export const toggleCard = (
  state: State,
  action: ReturnType<typeof actions.toggleCard>
) => {
  const newState = {
    ...state,
    upgradedBasicNemesisCards: {
      ...state.upgradedBasicNemesisCards,
      [action.payload]: {
        ...state.upgradedBasicNemesisCards[action.payload],
        selected: !state.upgradedBasicNemesisCards[action.payload].selected,
      },
    },
  }

  const selectedCardsToSave = state.upgradedBasicNemesisCardIds.filter(
    id => newState.upgradedBasicNemesisCards[id].selected
  )

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY, selectedCardsToSave],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
