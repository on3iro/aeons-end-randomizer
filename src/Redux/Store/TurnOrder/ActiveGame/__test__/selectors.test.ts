import config from 'config'

import { selectors } from 'Redux/Store/TurnOrder/ActiveGame/selectors'

const mockGameState = {
  TurnOrder: {
    ActiveGame: {
      deck: [
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player4-1'],
        config.TURNORDERCARDS['player2-1'],
        config.TURNORDERCARDS['nemesis-2'],
      ],
      discard: [
        config.TURNORDERCARDS['player3-1'],
        config.TURNORDERCARDS['nemesis-1'],
      ],
      started: true,
    },
  },
}

describe('TurnOrder | ActiveGame | selectors', () => {
  it('should get the current turnorder deck with getDeck()', () => {
    const expected = [
      config.TURNORDERCARDS['player1-1'],
      config.TURNORDERCARDS['player4-1'],
      config.TURNORDERCARDS['player2-1'],
      config.TURNORDERCARDS['nemesis-2'],
    ]

    const result = selectors.getDeck(mockGameState)

    expect(result).toEqual(expected)
  })

  it('should get the current turnorder discard with getDiscard()', () => {
    const expected = [
      config.TURNORDERCARDS['player3-1'],
      config.TURNORDERCARDS['nemesis-1'],
    ]

    const result = selectors.getDiscard(mockGameState)

    expect(result).toEqual(expected)
  })

  it('should get the current turnorder started status with getHasStarted()', () => {
    const result = selectors.getHasStarted(mockGameState)

    expect(result).toBe(true)
  })
})
