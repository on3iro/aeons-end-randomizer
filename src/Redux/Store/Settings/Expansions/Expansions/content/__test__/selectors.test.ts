import { ExpansionContentStateSlice } from '../types'

import { selectors } from '../selectors'
import { initialState } from '../reducer'

const mockSelectedExpansionsState: ExpansionContentStateSlice = {
  Settings: {
    Expansions: {
      Expansions: {
        content: initialState,
      },
    },
  },
}

describe('Settings | Expansions | content | selectors', () => {
  test('getIds', () => {
    const result = selectors.getContent(mockSelectedExpansionsState)

    expect(result).toEqual(initialState)
  })
})
