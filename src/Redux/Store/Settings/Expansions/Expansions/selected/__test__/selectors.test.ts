import { SelectedExpansionsStateSlice } from '../types'

import { selectors } from '../selectors'

const selected = [
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

const mockSelectedExpansionsState: SelectedExpansionsStateSlice = {
  Settings: {
    Expansions: {
      Expansions: {
        selected,
      },
    },
  },
}

describe('Settings | Expansions | selected | selectors', () => {
  test('getSelected', () => {
    const result = selectors.getSelected(mockSelectedExpansionsState)

    expect(result).toEqual(selected)
  })

  test('getIsSelected', () => {
    const result = selectors.getIsSelected(mockSelectedExpansionsState, {
      expansionId: 'AE',
    })

    expect(result).toBe(true)
  })
})
