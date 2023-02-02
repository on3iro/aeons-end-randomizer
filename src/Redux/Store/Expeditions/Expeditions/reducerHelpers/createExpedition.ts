import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { State } from '../types'
import * as sideEffects from '../sideEffects'
import { actions } from '../actions'
import { actions as rootActions } from 'Redux/Store'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const createExpedition = (
  state: State,
  action: ReturnType<typeof actions.createExpedition>
) => {
  return loop(
    state,
    Cmd.run(sideEffects.createExpedition, {
      args: [Cmd.getState, action.payload.baseConfig],
      successActionCreator: actions.createExpeditionSuccess,
    })
  )
}

export const createExpeditionSuccess = (
  state: State,
  action: ReturnType<typeof actions.createExpeditionSuccess>
) => {
  const newExpedition = action.payload

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [newExpedition.id]: newExpedition,
    },
    expeditionIds: [newExpedition.id, ...state.expeditionIds],
  }

  return loop(
    newState,
    Cmd.list([
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, newState],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      }),
      Cmd.action(
        rootActions.Snackbars.queue({
          type: 'success',
          message: 'Expedition created successfully!',
        })
      ),
    ])
  )
}
