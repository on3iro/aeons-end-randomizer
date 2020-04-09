import { getRandomEntity } from 'Redux/helpers'

import { getUpgradedBasicNemesisCardsResult } from '../getUpgradedBasicNemesisCardsResult'
import * as rollNewUpgradedNemesisCardsModule from '../rollNewUpgradedNemesisCards'

describe('getUpgradedBasicNemesisCardsResult()', () => {
  test('rollNewUpgradedNemesisCards() should have been called if "drawRandom" is true', () => {
    // We are not interested in the calculation itself here, as rollNewUpgradedNemesisCards() hast its own test
    // We only care about it being called, if the tier is new
    const spy = jest.spyOn(
      rollNewUpgradedNemesisCardsModule,
      'rollNewUpgradedNemesisCards'
    )

    getUpgradedBasicNemesisCardsResult(
      {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: {
          hasTreasure: false,
        },
      },
      [],
      [],
      getRandomEntity,
      { seed: 'test', state: true }
    )

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  test('previous cards and seed should be returned, if no random cards should be drawn', () => {
    const spy = jest.spyOn(
      rollNewUpgradedNemesisCardsModule,
      'rollNewUpgradedNemesisCards'
    )

    const inputSeed = { seed: 'test', state: true }
    const result = getUpgradedBasicNemesisCardsResult(
      {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: {
          hasTreasure: false,
        },
      },
      [],
      ['a', 'b'],
      getRandomEntity,
      inputSeed
    )

    expect(result.result).toEqual(['a', 'b'])
    expect(result.seed).toEqual(inputSeed)
    expect(spy).not.toHaveBeenCalled()

    spy.mockRestore()
  })
})
