import AERData from 'aer-data/src/index'

import { selectors } from 'Redux/Store/TurnOrder/ActiveGame/selectors'

const mockGameState = {
  TurnOrder: {
    ActiveGame: {
      deck: [
        AERData.turnordercards['player1-1'],
        AERData.turnordercards['player4-1'],
        AERData.turnordercards['player2-1'],
        AERData.turnordercards['nemesis-2'],
      ],
      discard: [
        AERData.turnordercards['player3-1'],
        AERData.turnordercards['nemesis-1'],
      ],
      started: true,
      round: 4,
    },
  },
}

describe('TurnOrder | ActiveGame | selectors', () => {
  it('should get the current turnorder deck with getDeck()', () => {
    const expected = [
      AERData.turnordercards['player1-1'],
      AERData.turnordercards['player4-1'],
      AERData.turnordercards['player2-1'],
      AERData.turnordercards['nemesis-2'],
    ]

    const result = selectors.getDeck(mockGameState)

    expect(result).toEqual(expected)
  })

  it('should get the current turnorder discard with getDiscard()', () => {
    const expected = [
      AERData.turnordercards['player3-1'],
      AERData.turnordercards['nemesis-1'],
    ]

    const result = selectors.getDiscard(mockGameState)

    expect(result).toEqual(expected)
  })

  it('should get the current turnorder started status with getHasStarted()', () => {
    const result = selectors.getHasStarted(mockGameState)

    expect(result).toBe(true)
  })

  it('should get the current round with getRoundCount()', () => {
    const result = selectors.getRoundCount(mockGameState)

    expect(result).toBe(4)
  })
})
