import { Cmd, getCmd, getModel } from 'redux-loop'

import { State } from '../types'
import { actions } from '../actions'
import {
  getSelectedTreasuresFromDB,
  setSelectedTreasuresToDB,
} from '../sideEffects'

import { initialState, Reducer } from '../reducer'

const mockSelectedTreasuresState: State = initialState

describe('Settings | Expansions | Treasures | selected | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it('should handle TOGGLE', () => {
    const selectedTreasuresToSave = initialState.filter(
      (treasure) => treasure !== 'CronesAmulet'
    )

    const result = Reducer(
      mockSelectedTreasuresState,
      actions.toggle('CronesAmulet')
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toMatchSnapshot()
    expect(cmd).toEqual(
      Cmd.run(setSelectedTreasuresToDB, {
        args: [selectedTreasuresToSave],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB', () => {
    const result = Reducer(initialState, actions.fetchFromDB())

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(initialState)

    expect(cmd).toEqual(
      Cmd.run(getSelectedTreasuresFromDB, {
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      mockSelectedTreasuresState,
      actions.fetchFromDBSuccessful(['CronesAmulet'])
    )

    expect(getModel(result)).toEqual(['CronesAmulet'])
  })

  it('should handle FETCH_FROM_DB_SUCCESS for undefined state', () => {
    const result = Reducer(
      initialState,
      // @ts-ignore
      actions.fetchFromDBSuccessful(undefined)
    )

    expect(getModel(result)).toEqual(initialState)
  })

  it.todo('should handle FETCH_FROM_DB_FAILURE')
  it.todo('should handle SET_TO_DB')
  it.todo('should handle SET_TO_DB_SUCCESS')
  it.todo('should handle SET_TO_DB_FAILURE')
})
