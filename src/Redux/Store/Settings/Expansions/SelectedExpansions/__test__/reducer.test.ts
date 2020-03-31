import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb, get as getFromDb } from 'idb-keyval'

import { State } from 'Redux/Store/Settings/Expansions/SelectedExpansions/types'
import { EXPANSIONS_DB_KEY } from 'Redux/Store/Settings/Expansions/SelectedExpansions/constants'
import { actions } from 'Redux/Store/Settings/Expansions/SelectedExpansions/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Settings/Expansions/SelectedExpansions/reducer'

const mockSelectedExpansionsState: State = {
  expansions: {
    AE: {
      id: 'AE',
      name: 'Aeons End',
      type: 'standalone',
      selected: true,
    },
    BS: {
      id: 'BS',
      name: 'Buried Secrets',
      type: 'mini',
      selected: true,
    },
    Depths: {
      id: 'Depths',
      name: 'The Depths',
      type: 'mini',
      selected: false,
    },
    IW: {
      id: 'IW',
      name: 'Into The Wild',
      type: 'mini',
      selected: false,
    },
    Legacy: {
      id: 'Legacy',
      name: 'Legacy',
      type: 'standalone',
      selected: false,
    },
    NA: {
      id: 'NA',
      name: 'The New Age',
      type: 'standalone',
      selected: false,
    },
    Nameless: {
      id: 'Nameless',
      name: 'The Nameless',
      type: 'mini',
      selected: false,
    },
    OD: {
      id: 'OD',
      name: 'Outer Dark',
      type: 'mini',
      selected: false,
    },
    SD: {
      id: 'SD',
      name: 'Shattered Dreams',
      type: 'mini',
      selected: false,
    },
    TA: {
      id: 'TA',
      name: 'The Ancients',
      type: 'mini',
      selected: false,
    },
    TV: {
      id: 'TV',
      name: 'The Void',
      type: 'mini',
      selected: false,
    },
    WE: {
      id: 'WE',
      name: 'War Eternal',
      type: 'standalone',
      selected: false,
    },
    promos: {
      id: 'promos',
      name: 'Promos',
      type: 'promo',
      selected: true,
    },
  },
  expansionIds: [
    'AE',
    'BS',
    'Depths',
    'IW',
    'Legacy',
    'NA',
    'Nameless',
    'OD',
    'SD',
    'TA',
    'TV',
    'WE',
    'promos',
  ],
}

describe('Settings | Expansions | SelectedExpansions | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it('should handle TOGGLE_ALL', () => {
    const expected = {
      expansions: {
        AE: {
          id: 'AE',
          name: 'Aeons End',
          type: 'standalone',
          selected: true,
        },
        BS: {
          id: 'BS',
          name: 'Buried Secrets',
          type: 'mini',
          selected: true,
        },
        Depths: {
          id: 'Depths',
          name: 'The Depths',
          type: 'mini',
          selected: true,
        },
        IW: {
          id: 'IW',
          name: 'Into The Wild',
          type: 'mini',
          selected: true,
        },
        Legacy: {
          id: 'Legacy',
          name: 'Legacy',
          type: 'standalone',
          selected: true,
        },
        NA: {
          id: 'NA',
          name: 'The New Age',
          type: 'standalone',
          selected: true,
        },
        Nameless: {
          id: 'Nameless',
          name: 'The Nameless',
          type: 'mini',
          selected: true,
        },
        OD: {
          id: 'OD',
          name: 'Outer Dark',
          type: 'mini',
          selected: true,
        },
        SD: {
          id: 'SD',
          name: 'Shattered Dreams',
          type: 'mini',
          selected: true,
        },
        TA: {
          id: 'TA',
          name: 'The Ancients',
          type: 'mini',
          selected: true,
        },
        TV: {
          id: 'TV',
          name: 'The Void',
          type: 'mini',
          selected: true,
        },
        WE: {
          id: 'WE',
          name: 'War Eternal',
          type: 'standalone',
          selected: true,
        },
        promos: {
          id: 'promos',
          name: 'Promos',
          type: 'promo',
          selected: true,
        },
      },
      expansionIds: [
        'AE',
        'BS',
        'Depths',
        'IW',
        'Legacy',
        'NA',
        'Nameless',
        'OD',
        'SD',
        'TA',
        'TV',
        'WE',
        'promos',
      ],
    }

    const selectedExpansionsToSave = [
      'AE',
      'BS',
      'Depths',
      'IW',
      'Legacy',
      'NA',
      'Nameless',
      'OD',
      'SD',
      'TA',
      'TV',
      'WE',
      'promos',
    ]

    const result = Reducer(mockSelectedExpansionsState, actions.toggleAll())

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(expected)
    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPANSIONS_DB_KEY, selectedExpansionsToSave],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle TOGGLE_EXPANSION', () => {
    const expected = {
      expansions: {
        AE: {
          id: 'AE',
          name: 'Aeons End',
          type: 'standalone',
          selected: true,
        },
        BS: {
          id: 'BS',
          name: 'Buried Secrets',
          type: 'mini',
          selected: true,
        },
        Depths: {
          id: 'Depths',
          name: 'The Depths',
          type: 'mini',
          selected: true,
        },
        IW: {
          id: 'IW',
          name: 'Into The Wild',
          type: 'mini',
          selected: false,
        },
        Legacy: {
          id: 'Legacy',
          name: 'Legacy',
          type: 'standalone',
          selected: false,
        },
        NA: {
          id: 'NA',
          name: 'The New Age',
          type: 'standalone',
          selected: false,
        },
        Nameless: {
          id: 'Nameless',
          name: 'The Nameless',
          type: 'mini',
          selected: false,
        },
        OD: {
          id: 'OD',
          name: 'Outer Dark',
          type: 'mini',
          selected: false,
        },
        SD: {
          id: 'SD',
          name: 'Shattered Dreams',
          type: 'mini',
          selected: false,
        },
        TA: {
          id: 'TA',
          name: 'The Ancients',
          type: 'mini',
          selected: false,
        },
        TV: {
          id: 'TV',
          name: 'The Void',
          type: 'mini',
          selected: false,
        },
        WE: {
          id: 'WE',
          name: 'War Eternal',
          type: 'standalone',
          selected: false,
        },
        promos: {
          id: 'promos',
          name: 'Promos',
          type: 'promo',
          selected: true,
        },
      },
      expansionIds: [
        'AE',
        'BS',
        'Depths',
        'IW',
        'Legacy',
        'NA',
        'Nameless',
        'OD',
        'SD',
        'TA',
        'TV',
        'WE',
        'promos',
      ],
    }

    const selectedExpansionsToSave = ['AE', 'BS', 'Depths', 'promos']

    const result = Reducer(
      mockSelectedExpansionsState,
      actions.toggleExpansion('Depths')
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(expected)
    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPANSIONS_DB_KEY, selectedExpansionsToSave],
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
        args: [EXPANSIONS_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      mockSelectedExpansionsState,
      actions.fetchFromDBSuccessful(['AE', 'BS', 'promos'])
    )

    expect(getModel(result)).toEqual(mockSelectedExpansionsState)
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
