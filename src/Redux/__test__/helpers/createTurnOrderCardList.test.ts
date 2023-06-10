import { createTurnOrderCardList } from '../../helpers'
import AERData from 'aer-data/src/index'
import { getRandomEntity } from 'Redux/helpers'

describe('createTurnOrderCardList()', () => {
  it('test 1', () => {
    const result = createTurnOrderCardList(
      AERData.turnordersetups.onePlayer.variations.default.turnOrderCards,
      AERData.turnordersetups.onePlayer.variations.default.turnOrderCards,
      getRandomEntity,
      { seed: 'test' }
    )

    expect(result).toMatchSnapshot()
  })

  it('test 2', () => {
    const result = createTurnOrderCardList(
      AERData.turnordersetups.onePlayer.variations.default.turnOrderCards,
      AERData.turnordersetups.onePlayer.variations.default.turnOrderCards,
      getRandomEntity,
      { seed: 'test' }
    )

    expect(result).toMatchSnapshot()
  })
})
