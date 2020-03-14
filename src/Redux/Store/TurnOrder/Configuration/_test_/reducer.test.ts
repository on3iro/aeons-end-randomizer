import { ActionTypes } from 'Redux/Store/TurnOrder/Configuration/types'
import {
  initialState,
  Reducer,
} from 'Redux/Store/TurnOrder/Configuration/reducer'

describe('Turnorder configuration reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    expect(Reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle SET_MODE', () => {
    expect(
      Reducer(initialState, {
        type: ActionTypes.SET_MODE,
        payload: 'Blitz',
      })
    ).toMatchSnapshot()
  })

  it('should handle SELECT_PLAYER_COUNT', () => {
    expect(
      Reducer(initialState, {
        type: ActionTypes.SELECT_PLAYER_COUNT,
        payload: 'onePlayer',
      })
    ).toMatchSnapshot()
  })

  it('should handle SELECT_SETUP', () => {
    expect(
      Reducer(initialState, {
        type: ActionTypes.SELECT_SETUP,
        payload: 'default',
      })
    ).toMatchSnapshot()
  })

  it('should handle FETCH_FROM_DB', () => {
    expect(
      Reducer(initialState, {
        type: ActionTypes.FETCH_FROM_DB,
      })
    ).toMatchSnapshot()
  })

  it('should handle FETCH_FROM_DB_SUCCESS', () => {
    expect(
      Reducer(initialState, {
        type: ActionTypes.FETCH_FROM_DB_SUCCESS,
        payload: {
          ...initialState,
          Mode: 'Maelstrom',
        },
      })
    ).toMatchSnapshot()
  })

  it('should handle FETCH_FROM_DB_FAILURE', () => {
    expect(
      Reducer(initialState, {
        type: ActionTypes.FETCH_FROM_DB_FAILURE,
      })
    ).toMatchSnapshot()
  })
})
