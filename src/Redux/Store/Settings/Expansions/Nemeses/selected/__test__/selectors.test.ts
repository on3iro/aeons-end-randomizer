import * as types from 'aer-types/types'

import { SelectedNemesesStateSlice } from '../types'

import { selectors } from '../selectors'

const mockSelectedNemesesState: SelectedNemesesStateSlice = {
  Settings: {
    Expansions: {
      Nemeses: {
        selected: ['DiamondCluster'],
      },
    },
  },
}

describe('Settings | Expansions | Nemeses | selected | selectors', () => {
  test('getSelected()', () => {
    expect(selectors.getSelected(mockSelectedNemesesState)).toEqual([
      'DiamondCluster',
    ])
  })

  test('getIsSelected()', () => {
    expect(
      selectors.getIsSelected(mockSelectedNemesesState, { id: 'Jade' })
    ).toBe(false)
  })
})
