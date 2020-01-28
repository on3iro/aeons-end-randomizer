import { createTurnOrderCardList } from '../../helpers'
import { TURNORDERSETUPS } from 'config/turnOrderSetups'

describe('createTurnOrderCardList()', () => {
  it('should return the correct elements with getFirst() entity getter', () => {
    const getFirst = (available: any[]) => available[0]

    const result = createTurnOrderCardList(
      TURNORDERSETUPS.onePlayer.variations.default.turnOrderCards,
      TURNORDERSETUPS.onePlayer.variations.default.turnOrderCards,
      getFirst
    )

    expect(result).toEqual({
      availableEntities: [],
      result: TURNORDERSETUPS.onePlayer.variations.default.turnOrderCards,
    })
  })

  it('should return the correct elements with getSecond() entity getter', () => {
    const getSecond = (available: any[]) => available[1]

    const result = createTurnOrderCardList(
      TURNORDERSETUPS.onePlayer.variations.default.turnOrderCards,
      TURNORDERSETUPS.onePlayer.variations.default.turnOrderCards,
      getSecond
    )

    expect(result).toEqual({
      availableEntities: [
        {
          id: 'player1-1',
          name: 'Player 1',
          type: 'player1',
        },
      ],
      result: [
        { id: 'player1-2', name: 'Player 1', type: 'player1' },
        { id: 'player1-3', name: 'Player 1', type: 'player1' },
        { id: 'nemesis-1', name: 'Nemesis', type: 'nemesis' },
        { id: 'nemesis-2', name: 'Nemesis', type: 'nemesis' },
      ],
    })
  })
})
