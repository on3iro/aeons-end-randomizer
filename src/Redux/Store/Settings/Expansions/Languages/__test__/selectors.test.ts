import * as types from 'aer-types/types'

import { SelectedLanguagesStateSlice } from '../types'

import { initialState } from '../reducer'
import { selectors } from '../selectors'

const mockLanguagesState: SelectedLanguagesStateSlice = {
  Settings: {
    Expansions: {
      Languages: initialState,
    },
  },
}

describe('Settings | Expansions | Languages | selectors', () => {
  test('getLanguagesByExpansion()', () => {
    expect(selectors.getLanguagesByExpansion(mockLanguagesState)).toEqual(
      initialState
    )
  })

  test('getSelectedLanguageByExpansionId', () => {
    expect(
      selectors.getSelectedLanguageByExpansionId(mockLanguagesState, {
        expansionId: 'AE',
      })
    ).toBe('ENG')
  })
})
