import { Reducer } from '../index'
import * as SelectedExpansions from '../../Settings/Expansions/SelectedExpansions'

describe('reducer()', () => {
  it('should set loading to true on expansion fetch', () => {
    const initialState = false
    const result = Reducer(
      initialState,
      SelectedExpansions.actions.fetchFromDB()
    )

    expect(result).toBe(true)
  })

  it('should set loading to false on expansion fetch success/failure', () => {
    const initialState = true
    const sucessResult = Reducer(
      initialState,
      SelectedExpansions.actions.fetchFromDBSuccessful(['something'])
    )

    expect(sucessResult).toBe(false)

    const failureResult = Reducer(
      initialState,
      SelectedExpansions.actions.fetchFromDBFailed({})
    )

    expect(failureResult).toBe(false)
  })
})
