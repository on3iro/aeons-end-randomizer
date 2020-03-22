import { distinct } from 'helpers'
import { getRandomEntity } from 'Redux/helpers'

import { rollNewUpgradedNemesisCards } from '../rollNewUpgradedNemesisCards'

describe('rollNewUpgradedNemesisCards()', () => {
  test('result should contain previous cards', () => {
    const result = rollNewUpgradedNemesisCards(
      [],
      ['tier1_a', 'tier2_a'],
      2,
      getRandomEntity,
      {
        seed: 'test',
        state: true,
      }
    )

    expect(result.result).toEqual(['tier1_a', 'tier2_a'])
  })

  test('result should contain new cards', () => {
    const result = rollNewUpgradedNemesisCards(
      [
        {
          id: 'tier1_a',
          tier: 1,
        },
        {
          id: 'tier1_b',
          tier: 1,
        },
        {
          id: 'tier2_a',
          tier: 2,
        },
        {
          id: 'tier2_b',
          tier: 2,
        },
        {
          id: 'tier2_c',
          tier: 2,
        },
        {
          id: 'tier2_d',
          tier: 2,
        },
        {
          id: 'tier3_a',
          tier: 3,
        },
        {
          id: 'tier3_b',
          tier: 3,
        },
        {
          id: 'tier3_c',
          tier: 3,
        },
        {
          id: 'tier3_d',
          tier: 3,
        },
      ],
      ['tier1_a', 'tier2_a'],
      2,
      getRandomEntity,
      {
        seed: 'test',
        state: true,
      }
    )

    // NOTE:
    // tier 2 -> 1 tier 1 card, 3 tier 2, 3 tier 3
    // We have 2 previous cards:
    // 1 + 3 + 3 + 2 = 9
    expect(result.result.length).toBe(9)
  })

  test('result should not containt duplicates', () => {
    const result = rollNewUpgradedNemesisCards(
      [
        {
          id: 'tier1_a',
          tier: 1,
        },
        {
          id: 'tier1_b',
          tier: 1,
        },
        {
          id: 'tier2_a',
          tier: 2,
        },
        {
          id: 'tier2_b',
          tier: 2,
        },
        {
          id: 'tier2_c',
          tier: 2,
        },
        {
          id: 'tier2_d',
          tier: 2,
        },
        {
          id: 'tier3_a',
          tier: 3,
        },
        {
          id: 'tier3_b',
          tier: 3,
        },
        {
          id: 'tier3_c',
          tier: 3,
        },
        {
          id: 'tier3_d',
          tier: 3,
        },
      ],
      ['tier1_a', 'tier2_a'],
      2,
      getRandomEntity,
      {
        seed: 'test',
        state: true,
      }
    )

    expect(result.result).toEqual(result.result.filter(distinct))
  })

  test('result should not contain new ids if tier is 1', () => {
    const result = rollNewUpgradedNemesisCards(
      [
        {
          id: 'tier1_a',
          tier: 1,
        },
        {
          id: 'tier1_b',
          tier: 1,
        },
        {
          id: 'tier2_a',
          tier: 2,
        },
        {
          id: 'tier2_b',
          tier: 2,
        },
        {
          id: 'tier2_c',
          tier: 2,
        },
        {
          id: 'tier2_d',
          tier: 2,
        },
        {
          id: 'tier3_a',
          tier: 3,
        },
        {
          id: 'tier3_b',
          tier: 3,
        },
        {
          id: 'tier3_c',
          tier: 3,
        },
        {
          id: 'tier3_d',
          tier: 3,
        },
      ],
      ['tier1_a', 'tier2_a'],
      1,
      getRandomEntity,
      {
        seed: 'test',
        state: true,
      }
    )

    expect(result.result.length).toBe(2)
  })

  test('seed state should differ from input seed state if getRandomEntity() is used as entity getter and tier is above 1', () => {
    const result = rollNewUpgradedNemesisCards(
      [],
      ['tier1_a', 'tier2_a'],
      2,
      getRandomEntity,
      {
        seed: 'test',
        state: true,
      }
    )

    expect(result.seed.state).not.toEqual(true)
  })

  test('seed state should be equal to input seed state, if tier is 1', () => {
    const inputSeedState = true

    const result = rollNewUpgradedNemesisCards(
      [],
      ['tier1_a', 'tier2_a'],
      1,
      getRandomEntity,
      {
        seed: 'test',
        state: inputSeedState,
      }
    )

    expect(result.seed.state).toEqual(inputSeedState)
  })

  test('result seed.seed should equal input seed.seed', () => {
    const inputSeed = 'test'

    const result = rollNewUpgradedNemesisCards(
      [],
      ['tier1_a', 'tier2_a'],
      2,
      getRandomEntity,
      {
        seed: inputSeed,
        state: true,
      }
    )

    expect(result.seed.seed).toBe(inputSeed)
  })
})
