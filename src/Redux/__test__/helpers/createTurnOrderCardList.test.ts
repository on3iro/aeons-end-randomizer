import { createTurnOrderCardList } from '../../helpers'
import { TURNORDERSETUPS } from 'config/turnOrderSetups'
import { getRandomEntity } from 'Redux/helpers'

describe('createTurnOrderCardList()', () => {
  it('test 1', () => {
    const result = createTurnOrderCardList(
      TURNORDERSETUPS.onePlayer.variations.default.turnOrderCards,
      TURNORDERSETUPS.onePlayer.variations.default.turnOrderCards,
      getRandomEntity,
      { seed: 'test' }
    )

    expect(result).toMatchSnapshot()
  })

  it('test 2', () => {
    const result = createTurnOrderCardList(
      TURNORDERSETUPS.onePlayer.variations.default.turnOrderCards,
      TURNORDERSETUPS.onePlayer.variations.default.turnOrderCards,
      getRandomEntity,
      { seed: 'test' }
    )

    expect(result).toMatchSnapshot()
  })
})
