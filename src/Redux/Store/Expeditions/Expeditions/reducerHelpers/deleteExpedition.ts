import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { EXPEDITIONS_DB_KEY } from './helpers'
import { State } from '../types'
import { actions } from '../actions'

export const deleteExpedition = (
  state: State,
  action: ReturnType<typeof actions.deleteExpedition>
) => {
  const id = action.payload

  const { [id]: expedition, ...rest } = state.expeditions

  const newState = {
    expeditions: { ...rest },
    expeditionIds: state.expeditionIds.filter(
      expeditionId => expeditionId !== id
    ),
  }

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [EXPEDITIONS_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
