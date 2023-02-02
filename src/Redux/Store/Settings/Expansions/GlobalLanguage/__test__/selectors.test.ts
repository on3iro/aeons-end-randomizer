import * as types from 'aer-types/types'

import { SelectedGlobalLanguageStateSlice } from '../types'

import { initialState } from '../reducer'
import { selectors } from '../selectors'

const mockLanguagesState: SelectedGlobalLanguageStateSlice = {
  Settings: {
    Expansions: {
      GlobalLanguage: initialState,
    },
  },
}

describe('Settings | Expansions | GlobalLanguage | selectors', () => {
  test('getGlobalLanguageOfExpansions()', () => {
    expect(selectors.getGlobalLanguageOfExpansions(mockLanguagesState)).toEqual(
      initialState
    )
  })
})
