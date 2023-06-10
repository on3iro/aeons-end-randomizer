import * as types from 'aer-types/types'

import { SelectedCardsStateSlice } from '../types'

import { selectors } from '../selectors'

const mockSelectedCardsState: SelectedCardsStateSlice = {
  Settings: {
    Expansions: {
      Cards: {
        selected: ['DiamondCluster'],
      },
    },
  },
}

describe('Settings | Expansions | Cards | selected | selectors', () => {
  test('getSelected()', () => {
    expect(selectors.getSelected(mockSelectedCardsState)).toEqual([
      'DiamondCluster',
    ])
  })

  test('getIsSelected()', () => {
    expect(
      selectors.getIsSelected(mockSelectedCardsState, { cardId: 'Jade' })
    ).toBe(false)
  })
})
