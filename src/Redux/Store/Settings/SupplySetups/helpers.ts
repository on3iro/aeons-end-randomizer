import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as types from 'aer-types'

import { SUPPLY_DB_KEY } from './constants'
import { State } from './types'
import { actions } from './actions'
import { initialState } from './reducer'

const newStateWithDBWrite = (newState: State) => {
  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [SUPPLY_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}

const allSetsAreSelected = (state: State) =>
  Object.values({ ...state.Predefined.setups, ...state.Custom.setups }).every(
    val => val.active
  )

const migrate = (
  oldSetups:
    | {
        Predefined: { [id: string]: types.IMarketSetup }
        Custom: { [id: string]: types.IMarketSetup }
      }
    | State
) => {
  if (!oldSetups) {
    return initialState
  }

  if (!oldSetups.Predefined.setups || !oldSetups.Custom.setups) {
    return {
      Predefined: {
        setups: oldSetups.Predefined,
        ids: Object.keys(oldSetups.Predefined),
      },
      Custom: {
        setups: oldSetups.Custom,
        ids: Object.keys(oldSetups.Custom),
      },
    } as State
  }

  return oldSetups as State
}

export { newStateWithDBWrite, allSetsAreSelected, migrate }
