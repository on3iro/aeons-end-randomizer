import { SelectedExpansionsStateSlice } from 'Redux/Store/Settings/Expansions/SelectedExpansions/types'

import { selectors } from 'Redux/Store/Settings/Expansions/SelectedExpansions/selectors'

const mockSelectedExpansionsState: SelectedExpansionsStateSlice = {
  Settings: {
    Expansions: {
      SelectedExpansions: {
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
      },
    },
  },
}

const mockPromos: SelectedExpansionsStateSlice = {
  Settings: {
    Expansions: {
      SelectedExpansions: {
        expansions: {
          promosA: {
            id: 'promosA',
            name: 'Promos A',
            type: 'promo',
            selected: true,
          },
          promosC: {
            id: 'promosC',
            name: 'Promos C',
            type: 'promo',
            selected: true,
          },
          promosB: {
            id: 'promosB',
            name: 'Promos B',
            type: 'promo',
            selected: true,
          },
        },
        expansionIds: ['promosA', 'promosC', 'promosB'],
      },
    },
  },
}

describe('Settings | Expansions | SelectedExpansions | selectors', () => {
  test('getSelectedExpansionsState()', () => {
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

    const result = selectors.getSelectedExpansionsState(
      mockSelectedExpansionsState
    )

    expect(result).toEqual(expected)
  })

  test('getExpansionsByIdList()', () => {
    const expected = [
      {
        id: 'AE',
        name: 'Aeons End',
        type: 'standalone',
        selected: true,
      },
      {
        id: 'Depths',
        name: 'The Depths',
        type: 'mini',
        selected: false,
      },
    ]

    const result = selectors.getExpansionsByIdList(
      mockSelectedExpansionsState,
      {
        expansionIds: ['AE', 'Depths'],
      }
    )

    expect(result).toEqual(expected)
  })

  test('getExpansionNamesByIdList()', () => {
    const expected = ['Aeons End', 'The Depths']

    const result = selectors.getExpansionNamesByIdList(
      mockSelectedExpansionsState,
      {
        expansionIds: ['AE', 'Depths'],
      }
    )

    expect(result).toEqual(expected)
  })

  test('getSelectedExpansionsArray()', () => {
    const expected = ['AE', 'BS', 'promos']

    const result = selectors.getSelectedExpansionsArray(
      mockSelectedExpansionsState
    )

    expect(result).toEqual(expected)
  })

  test('getAllExpansionsSelected()', () => {
    const result = selectors.getAllExpansionsSelected(
      mockSelectedExpansionsState
    )

    expect(result).toBe(false)
  })

  test('getExpansionById()', () => {
    const expected = {
      id: 'Depths',
      name: 'The Depths',
      type: 'mini',
      selected: false,
    }

    const result = selectors.getExpansionById(
      mockSelectedExpansionsState,
      'Depths'
    )

    expect(result).toEqual(expected)
  })

  test('getHasStandaloneExpansion()', () => {
    const result = selectors.getHasStandaloneExpansion(
      mockSelectedExpansionsState
    )

    expect(result).toBe(true)
  })

  test('getStandaloneExpansionIds()', () => {
    const expected = ['AE', 'Legacy', 'NA', 'WE']

    const result = selectors.getStandaloneExpansionIds(
      mockSelectedExpansionsState
    )

    expect(result).toEqual(expected)
  })

  test('getMiniExpansionIds()', () => {
    const expected = ['BS', 'Depths', 'IW', 'Nameless', 'OD', 'SD', 'TA', 'TV']

    const result = selectors.getMiniExpansionIds(mockSelectedExpansionsState)

    expect(result).toEqual(expected)
  })

  test('getPromoIds()', () => {
    const expected = ['promos']

    const result = selectors.getPromoIds(mockSelectedExpansionsState)

    expect(result).toEqual(expected)
  })

  test('getStandaloneExpansions()', () => {
    const expected = [
      {
        id: 'AE',
        name: 'Aeons End',
        type: 'standalone',
        selected: true,
      },
      {
        id: 'Legacy',
        name: 'Legacy',
        type: 'standalone',
        selected: false,
      },
      {
        id: 'NA',
        name: 'The New Age',
        type: 'standalone',
        selected: false,
      },
      {
        id: 'WE',
        name: 'War Eternal',
        type: 'standalone',
        selected: false,
      },
    ]

    const result = selectors.getStandaloneExpansions(
      mockSelectedExpansionsState
    )

    expect(result).toEqual(expected)
  })

  test('getMiniExpansions()', () => {
    const expected = [
      {
        id: 'BS',
        name: 'Buried Secrets',
        type: 'mini',
        selected: true,
      },
      {
        id: 'Depths',
        name: 'The Depths',
        type: 'mini',
        selected: false,
      },
      {
        id: 'IW',
        name: 'Into The Wild',
        type: 'mini',
        selected: false,
      },
      {
        id: 'Nameless',
        name: 'The Nameless',
        type: 'mini',
        selected: false,
      },
      {
        id: 'OD',
        name: 'Outer Dark',
        type: 'mini',
        selected: false,
      },
      {
        id: 'SD',
        name: 'Shattered Dreams',
        type: 'mini',
        selected: false,
      },
      {
        id: 'TA',
        name: 'The Ancients',
        type: 'mini',
        selected: false,
      },
      {
        id: 'TV',
        name: 'The Void',
        type: 'mini',
        selected: false,
      },
    ]

    const result = selectors.getMiniExpansions(mockSelectedExpansionsState)

    expect(result).toEqual(expected)
  })

  test('getPromos()', () => {
    const expected = [
      {
        id: 'promos',
        name: 'Promos',
        type: 'promo',
        selected: true,
      },
    ]

    const result = selectors.getPromos(mockSelectedExpansionsState)

    expect(result).toEqual(expected)
  })

  test('getPromos() sorting', () => {
    const expected = [
      {
        id: 'promosA',
        name: 'Promos A',
        type: 'promo',
        selected: true,
      },
      {
        id: 'promosB',
        name: 'Promos B',
        type: 'promo',
        selected: true,
      },
      {
        id: 'promosC',
        name: 'Promos C',
        type: 'promo',
        selected: true,
      },
    ]

    const result = selectors.getPromos(mockPromos)

    expect(result).toEqual(expected)
  })
})
