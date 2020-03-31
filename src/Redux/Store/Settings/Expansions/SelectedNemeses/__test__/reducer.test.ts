import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb, get as getFromDb } from 'idb-keyval'

import { State } from 'Redux/Store/Settings/Expansions/SelectedNemeses/types'
import { NEMESES_DB_KEY } from 'Redux/Store/Settings/Expansions/SelectedNemeses/constants'
import { actions } from 'Redux/Store/Settings/Expansions/SelectedNemeses/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Settings/Expansions/SelectedNemeses/reducer'

const mockSelectedNemesesState: State = {
  nemeses: {
    CarapaceQueen: {
      expansion: 'AE',
      name: 'Carapace Queen',
      id: 'CarapaceQueen',
      health: 60,
      difficulty: 3,
      expeditionRating: 1,
      additionalInfo: '',
      selected: true,
    },
    CrookedMask: {
      expansion: 'AE',
      name: 'Crooked Mask',
      id: 'CrookedMask',
      health: 70,
      difficulty: 5,
      expeditionRating: 2,
      additionalInfo: '',
      selected: false,
    },
    HordeCrone: {
      expansion: 'Depths',
      name: 'Horde-Crone',
      id: 'HordeCrone',
      health: 60,
      difficulty: 6,
      expeditionRating: 2,
      additionalInfo: '',
      selected: true,
    },
  },
  nemesisIds: ['CarapaceQueen', 'CrookedMask', 'HordeCrone'],
}

describe('Settings | Expansions | SelectedNemeses | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it('should handle TOGGLE_NEMESIS', () => {
    const expected = {
      nemeses: {
        CarapaceQueen: {
          expansion: 'AE',
          name: 'Carapace Queen',
          id: 'CarapaceQueen',
          health: 60,
          difficulty: 3,
          expeditionRating: 1,
          additionalInfo: '',
          selected: true,
        },
        CrookedMask: {
          expansion: 'AE',
          name: 'Crooked Mask',
          id: 'CrookedMask',
          health: 70,
          difficulty: 5,
          expeditionRating: 2,
          additionalInfo: '',
          selected: false,
        },
        HordeCrone: {
          expansion: 'Depths',
          name: 'Horde-Crone',
          id: 'HordeCrone',
          health: 60,
          difficulty: 6,
          expeditionRating: 2,
          additionalInfo: '',
          selected: false,
        },
      },
      nemesisIds: ['CarapaceQueen', 'CrookedMask', 'HordeCrone'],
    }

    const selectedNemesesToSave = ['CarapaceQueen']

    const result = Reducer(
      mockSelectedNemesesState,
      actions.toggleNemesis('HordeCrone')
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(expected)
    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [NEMESES_DB_KEY, selectedNemesesToSave],
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
      Cmd.run(getFromDb, {
        args: [NEMESES_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      mockSelectedNemesesState,
      actions.fetchFromDBSuccessful(['CarapaceQueen', 'HordeCrone'])
    )

    expect(getModel(result)).toEqual(mockSelectedNemesesState)
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
