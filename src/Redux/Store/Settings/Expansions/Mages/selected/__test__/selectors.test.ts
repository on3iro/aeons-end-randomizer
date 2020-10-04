import * as types from 'aer-types/types'

import { SelectedMagesStateSlice } from '../types'

import { selectors } from '../selectors'

const mockSelectedCardsState: SelectedMagesStateSlice = {
  Settings: {
    Expansions: {
      Mages: {
        selected: ['Adelheim'],
      },
    },
  },
}

describe('Settings | Expansions | Mages | selected | selectors', () => {
  test('getSelected()', () => {
    expect(selectors.getSelected(mockSelectedCardsState)).toEqual(['Adelheim'])
  })

  test('getIsSelected()', () => {
    expect(
      selectors.getIsSelected(mockSelectedCardsState, { id: 'Brama' })
    ).toBe(false)
  })
})
