import { getRandomEntity } from 'Redux/helpers'

import { getUpgradedBasicNemesisIdsByBattleTier } from '../getUpgradedBasicNemesisIdsByBattleTier'

describe('getUpgradedBasicNemesisIdsByBattleTier()', () => {
  it('should return no new ids for tier 1', () => {
    const result = getUpgradedBasicNemesisIdsByBattleTier({
      availableTier1Ids: ['tier1_a'],
      availableTier2Ids: ['tier2_a'],
      availableTier3Ids: ['tier3_a'],
      battleTier: 1,
      getEntity: getRandomEntity,
      seed: { seed: 'test', state: true },
    })

    expect(result.result).toEqual([])
  })

  it('should return input seed unaltered for tier 1', () => {
    const inputSeed = { seed: 'test', state: true }

    const result = getUpgradedBasicNemesisIdsByBattleTier({
      availableTier1Ids: ['tier1_a'],
      availableTier2Ids: ['tier2_a'],
      availableTier3Ids: ['tier3_a'],
      battleTier: 1,
      getEntity: getRandomEntity,
      seed: inputSeed,
    })

    expect(result.seed).toEqual(inputSeed)
  })

  test('result should contain 7 ids for tier 2', () => {
    const inputSeed = { seed: 'test', state: true }

    const result = getUpgradedBasicNemesisIdsByBattleTier({
      availableTier1Ids: ['tier1_a', 'tier1_b'],
      availableTier2Ids: ['tier2_a', 'tier2_b', 'tier2_c', 'tier2_d'],
      availableTier3Ids: ['tier3_a', 'tier3_b', 'tier3_c', 'tier3_d'],
      battleTier: 2,
      getEntity: getRandomEntity,
      seed: inputSeed,
    })

    expect(result.result.length).toBe(7)
  })

  test("result should contain less than 7 ids for tier 2 if there aren't enough available ids", () => {
    const inputSeed = { seed: 'test', state: true }

    const result = getUpgradedBasicNemesisIdsByBattleTier({
      availableTier1Ids: ['tier1_a'],
      availableTier2Ids: ['tier2_a'],
      availableTier3Ids: ['tier3_a', 'tier3_b', 'tier3_c', 'tier3_d'],
      battleTier: 2,
      getEntity: getRandomEntity,
      seed: inputSeed,
    })

    expect(result.result.length).toBe(5)
  })

  test('result seed state should differ from input state for tier higher than 1', () => {
    const inputSeed = { seed: 'test', state: true }

    const result = getUpgradedBasicNemesisIdsByBattleTier({
      availableTier1Ids: ['tier1_a'],
      availableTier2Ids: ['tier2_a'],
      availableTier3Ids: ['tier3_a', 'tier3_b', 'tier3_c', 'tier3_d'],
      battleTier: 2,
      getEntity: getRandomEntity,
      seed: inputSeed,
    })

    expect(result.seed.state).not.toEqual(inputSeed.state)

    // But:
    expect(result.seed.seed).toBe(inputSeed.seed)
  })

  test('result should contain 4 ids for tier 3', () => {
    const inputSeed = { seed: 'test', state: true }

    const result = getUpgradedBasicNemesisIdsByBattleTier({
      availableTier1Ids: ['tier1_a', 'tier1_b'],
      availableTier2Ids: ['tier2_a', 'tier2_b', 'tier2_c', 'tier2_d'],
      availableTier3Ids: ['tier3_a', 'tier3_b', 'tier3_c', 'tier3_d'],
      battleTier: 3,
      getEntity: getRandomEntity,
      seed: inputSeed,
    })

    expect(result.result.length).toBe(4)
  })
})
