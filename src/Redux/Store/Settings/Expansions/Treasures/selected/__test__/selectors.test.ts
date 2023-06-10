import * as types from 'aer-types/types'

import { SelectedTreasuresStateSlice } from '../types'

import { selectors } from '../selectors'

const mockSelectedTreasuresState: SelectedTreasuresStateSlice = {
  Settings: {
    Expansions: {
      Treasures: {
        selected: ['DiamondCluster'],
      },
    },
  },
}

describe('Settings | Expansions | Treasures | selected | selectors', () => {
  test('getSelected()', () => {
    expect(selectors.getSelected(mockSelectedTreasuresState)).toEqual([
      'DiamondCluster',
    ])
  })

  test('getIsSelected()', () => {
    expect(
      selectors.getIsSelected(mockSelectedTreasuresState, { id: 'Jade' })
    ).toBe(false)
  })
})
