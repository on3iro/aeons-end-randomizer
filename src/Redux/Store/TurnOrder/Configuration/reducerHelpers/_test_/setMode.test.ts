import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { TURNORDER_CONFIG_DB_KEY } from 'Redux/Store/TurnOrder/Configuration/constants'
import { initialState } from 'Redux/Store/TurnOrder/Configuration/reducer'
import { actions } from 'Redux/Store/TurnOrder/Configuration/actions'
import { setMode } from 'Redux/Store/TurnOrder/Configuration/reducerHelpers'

describe('reducerHelper setMode()', () => {
  const result = setMode(initialState, actions.setMode('Blitz'))

  const newState = {
    ...initialState,
    Mode: 'Blitz',
  }

  it('should have right model', () => {
    expect(getModel(result)).toEqual(newState)
  })

  it('should have right cmd', () => {
    const cmd = getCmd(result)

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [TURNORDER_CONFIG_DB_KEY, newState],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })
})
