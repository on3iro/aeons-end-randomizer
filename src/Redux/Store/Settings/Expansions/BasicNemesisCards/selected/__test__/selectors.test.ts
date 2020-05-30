import { SelectedBasicNemesisCardsStateSlice } from '../types'

import { selectors } from '../selectors'

const mockSelectedBasicNemesisCardsState: SelectedBasicNemesisCardsStateSlice = {
  Settings: {
    Expansions: {
      BasicNemesisCards: {
        selected: ['DiamondCluster'],
      },
    },
  },
}

describe('Settings | Expansions | BasicNemesisCards | selected | selectors', () => {
  test('getSelected()', () => {
    expect(selectors.getSelected(mockSelectedBasicNemesisCardsState)).toEqual([
      'DiamondCluster',
    ])
  })

  test('getIsSelected()', () => {
    expect(
      selectors.getIsSelected(mockSelectedBasicNemesisCardsState, {
        basicNemesisCardId: 'Jade',
      })
    ).toBe(false)
  })
})
