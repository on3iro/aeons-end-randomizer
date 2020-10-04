import * as types from 'aer-types/types'

import { SelectedUpgradedBasicNemesisCardsStateSlice } from '../types'

import { selectors } from '../selectors'

const mockSelectedUpgradedBasicNemesisCardsState: SelectedUpgradedBasicNemesisCardsStateSlice = {
  Settings: {
    Expansions: {
      UpgradedBasicNemesisCards: {
        selected: ['DiamondCluster'],
      },
    },
  },
}

describe('Settings | Expansions | UpgradedBasicNemesisCards | selected | selectors', () => {
  test('getSelected()', () => {
    expect(
      selectors.getSelected(mockSelectedUpgradedBasicNemesisCardsState)
    ).toEqual(['DiamondCluster'])
  })

  test('getIsSelected()', () => {
    expect(
      selectors.getIsSelected(mockSelectedUpgradedBasicNemesisCardsState, {
        id: 'Jade',
      })
    ).toBe(false)
  })
})
