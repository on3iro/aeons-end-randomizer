import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { SUPPLY_DB_KEY } from './constants'
import { State } from './types'
import { actions } from './actions'

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
    (val) => val.active
  )

export { newStateWithDBWrite, allSetsAreSelected }
