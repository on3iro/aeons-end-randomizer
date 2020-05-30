import { ExpansionIdsStateSlice } from '../types'

import { selectors } from '../selectors'

const ids = [
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

const mockSelectedExpansionsState: ExpansionIdsStateSlice = {
  Settings: {
    Expansions: {
      Expansions: {
        ids,
      },
    },
  },
}

describe('Settings | Expansions | ids | selectors', () => {
  test('getIds', () => {
    const result = selectors.getIds(mockSelectedExpansionsState)

    expect(result).toEqual(ids)
  })
})
