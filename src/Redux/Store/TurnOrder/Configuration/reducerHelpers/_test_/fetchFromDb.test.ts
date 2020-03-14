import { Cmd, getCmd, getModel } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import { Mode } from 'types'
import {
  actions as activeGameActions,
  Action as ActiveGameAction,
} from 'Redux/Store/TurnOrder/ActiveGame'

import { TURNORDER_CONFIG_DB_KEY } from 'Redux/Store/TurnOrder/Configuration/constants'
import { State } from 'Redux/Store/TurnOrder/Configuration/types'
import { initialState } from 'Redux/Store/TurnOrder/Configuration/reducer'
import { actions } from 'Redux/Store/TurnOrder/Configuration/actions'
import {
  fetchFromDb,
  fetchFromDbSuccess,
} from 'Redux/Store/TurnOrder/Configuration/reducerHelpers'

describe('reducerHelper fetchFromDb()', () => {
  const result = fetchFromDb(initialState)

  it('should have right cmd', () => {
    const cmd = getCmd(result)

    expect(cmd).toEqual(
      Cmd.run(getFromDb, {
        args: [TURNORDER_CONFIG_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })
})

describe('reducerHelper fetchFromDbSuccess()', () => {
  const mockState: State = {
    ...initialState,
    Mode: 'Blitz',
  }

  it('should have right model for defined state', () => {
    const result = fetchFromDbSuccess(
      initialState,
      actions.fetchFromDBSuccessful(mockState)
    )

    expect(getModel(result)).toEqual(mockState)
  })

  it('should have right cmd', () => {
    const result = fetchFromDbSuccess(
      initialState,
      actions.fetchFromDBSuccessful(mockState)
    )
    const cmd = getCmd(result)

    expect(cmd).toEqual(
      Cmd.action<ActiveGameAction>(activeGameActions.fetchFromDB())
    )
  })

  it('should have right model for undefined state', () => {
    const result = fetchFromDbSuccess(
      initialState,
      // @ts-ignore
      actions.fetchFromDBSuccessful(undefined)
    )

    expect(getModel(result)).toEqual(initialState)
  })
})
