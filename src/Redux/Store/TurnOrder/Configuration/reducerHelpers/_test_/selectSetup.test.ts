import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import config from 'config'

import { TURNORDER_CONFIG_DB_KEY } from 'Redux/Store/TurnOrder/Configuration/constants'
import { initialState } from 'Redux/Store/TurnOrder/Configuration/reducer'
import { actions } from 'Redux/Store/TurnOrder/Configuration/actions'
import { selectSetup } from 'Redux/Store/TurnOrder/Configuration/reducerHelpers'

describe('reducerHelper selectSetup()', () => {
  const result = selectSetup(initialState, actions.selectSetup('default'))

  const newState = {
    ...initialState,
    SelectedSetup: initialState.SelectedPlayerCount.variations['default'],
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
