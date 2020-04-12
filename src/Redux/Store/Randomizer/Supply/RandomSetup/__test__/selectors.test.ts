import { RandomSetupTilesStateSlice, selectors } from '..'

const mockSupply: RandomSetupTilesStateSlice = {
  Randomizer: {
    Supply: {
      RandomSetup: {
        Tiles: [
          { id: 'DiamondCluster' },
          { id: 'ChaosArc' },
          { id: 'SoulCords' },
        ],
      },
    },
  },
}

describe('Randomizer | Supply | RandomSetup | selectors', () => {
  test('getTiles()', () => {
    const expected = [
      { id: 'DiamondCluster' },
      { id: 'ChaosArc' },
      { id: 'SoulCords' },
    ]

    const result = selectors.getTiles(mockSupply)

    expect(result).toEqual(expected)
  })
})
