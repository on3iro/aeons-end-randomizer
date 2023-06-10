import * as types from 'aer-types/types'

import { getRandomBasicNemesisCardsByTier } from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/reducerHelpers/helpers'

const cards = [
  { id: 'minion1', type: 'Minion', tier: 1 },
  { id: 'minion2', type: 'Minion', tier: 1 },
  { id: 'minion3', type: 'Minion', tier: 1 },
  { id: 'minion4', type: 'Minion', tier: 2 },
  { id: 'minion5', type: 'Minion', tier: 2 },
  { id: 'minion6', type: 'Minion', tier: 2 },
  { id: 'minion7', type: 'Minion', tier: 3 },
  { id: 'minion8', type: 'Minion', tier: 3 },
  { id: 'minion9', type: 'Minion', tier: 3 },
  { id: 'power1', type: 'Power', tier: 1 },
  { id: 'power2', type: 'Power', tier: 1 },
  { id: 'power3', type: 'Power', tier: 1 },
  { id: 'power4', type: 'Power', tier: 2 },
  { id: 'power5', type: 'Power', tier: 2 },
  { id: 'power6', type: 'Power', tier: 2 },
  { id: 'power7', type: 'Power', tier: 3 },
  { id: 'power8', type: 'Power', tier: 3 },
  { id: 'power9', type: 'Power', tier: 3 },
  { id: 'attack1', type: 'Attack', tier: 1 },
  { id: 'attack2', type: 'Attack', tier: 1 },
  { id: 'attack3', type: 'Attack', tier: 1 },
  { id: 'attack4', type: 'Attack', tier: 2 },
  { id: 'attack5', type: 'Attack', tier: 2 },
  { id: 'attack6', type: 'Attack', tier: 2 },
  { id: 'attack7', type: 'Attack', tier: 3 },
  { id: 'attack8', type: 'Attack', tier: 3 },
  { id: 'attack9', type: 'Attack', tier: 3 },
] as types.BasicNemesisCard[]

describe('getRandomBasicNemesisCardsByTier()', () => {
  it('should handle one player tier 1', () => {
    const expected = [{ id: 'minion3' }]

    const result = getRandomBasicNemesisCardsByTier(cards, 1, 1, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(1)
  })

  it('should get between 0 and 1 minions for one player tier 1', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 1, 1)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(0)
    expect(minions.length).toBeLessThan(2)
  })

  it('should handle one player tier 2', () => {
    const expected = [{ id: 'minion6' }, { id: 'minion4' }, { id: 'attack6' }]

    const result = getRandomBasicNemesisCardsByTier(cards, 2, 1, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(3)
  })

  it('should get between 1 and 2 minions for one player tier 2', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 2, 1)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle one player tier 3', () => {
    const expected = [
      { id: 'minion9' },
      { id: 'minion7' },
      { id: 'attack9' },
      { id: 'power9' },
      { id: 'attack8' },
      { id: 'power7' },
      { id: 'power8' },
    ]

    const result = getRandomBasicNemesisCardsByTier(cards, 3, 1, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(7)
  })

  it('should get between 1 and 2 minions for one player tier 3', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 3, 1)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle two players tier 1', () => {
    const expected = [{ id: 'minion3' }, { id: 'minion1' }, { id: 'attack3' }]

    const result = getRandomBasicNemesisCardsByTier(cards, 1, 2, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(3)
  })

  it('should get between 1 and 2 minions for two players tier 1', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 1, 2)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle two players tier 2', () => {
    const expected = [
      { id: 'minion6' },
      { id: 'minion4' },
      { id: 'attack6' },
      { id: 'power6' },
      { id: 'attack5' },
    ]

    const result = getRandomBasicNemesisCardsByTier(cards, 2, 2, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(5)
  })

  it('should get between 1 and 2 minions for two players tier 2', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 2, 2)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle two players tier 3', () => {
    const expected = [
      { id: 'minion9' },
      { id: 'minion7' },
      { id: 'attack9' },
      { id: 'power9' },
      { id: 'attack8' },
      { id: 'power7' },
      { id: 'power8' },
    ]

    const result = getRandomBasicNemesisCardsByTier(cards, 3, 2, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(7)
  })

  it('should get between 1 and 2 minions for two players tier 3', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 3, 2)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle three players tier 1', () => {
    const expected = [
      { id: 'minion3' },
      { id: 'minion1' },
      { id: 'attack3' },
      { id: 'power3' },
      { id: 'attack2' },
    ]

    const result = getRandomBasicNemesisCardsByTier(cards, 1, 3, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(5)
  })

  it('should get between 1 and 2 minions for three players tier 1', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 1, 3)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle three players tier 2', () => {
    const expected = [
      { id: 'minion6' },
      { id: 'minion4' },
      { id: 'attack6' },
      { id: 'power6' },
      { id: 'attack5' },
      { id: 'power4' },
    ]

    const result = getRandomBasicNemesisCardsByTier(cards, 2, 3, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(6)
  })

  it('should get between 1 and 2 minions for three players tier 2', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 2, 3)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle three players tier 3', () => {
    const expected = [
      { id: 'minion9' },
      { id: 'minion7' },
      { id: 'attack9' },
      { id: 'power9' },
      { id: 'attack8' },
      { id: 'power7' },
      { id: 'power8' },
    ]

    const result = getRandomBasicNemesisCardsByTier(cards, 3, 3, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(7)
  })

  it('should get between 1 and 2 minions for three players tier 3', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 3, 3)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle four players tier 1', () => {
    const expected = [
      { id: 'minion3' },
      { id: 'minion1' },
      { id: 'attack3' },
      { id: 'power3' },
      { id: 'attack2' },
      { id: 'power1' },
      { id: 'power2' },
      { id: 'attack1' },
    ]

    const result = getRandomBasicNemesisCardsByTier(cards, 1, 4, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(8)
  })

  it('should get between 1 and 2 minions for four players tier 1', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 1, 4)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle four players tier 2', () => {
    const expected = [
      { id: 'minion6' },
      { id: 'minion4' },
      { id: 'attack6' },
      { id: 'power6' },
      { id: 'attack5' },
      { id: 'power4' },
      { id: 'power5' },
    ]

    const result = getRandomBasicNemesisCardsByTier(cards, 2, 4, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(7)
  })

  it('should get between 1 and 2 minions for four players tier 2', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 2, 4)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })

  it('should handle four players tier 3', () => {
    const expected = [
      { id: 'minion9' },
      { id: 'minion7' },
      { id: 'attack9' },
      { id: 'power9' },
      { id: 'attack8' },
      { id: 'power7' },
      { id: 'power8' },
    ]

    const result = getRandomBasicNemesisCardsByTier(cards, 3, 4, {
      seed: 'test',
    })

    expect(result).toEqual(expected)
    expect(result.length).toBe(7)
  })

  it('should get between 1 and 2 minions for four players tier 3', () => {
    const result = getRandomBasicNemesisCardsByTier(cards, 3, 4)

    const regex = new RegExp('minion\\d*', 'g')
    const minions = result.filter((card) => card.id.match(regex))

    expect(minions.length).toBeGreaterThanOrEqual(1)
    expect(minions.length).toBeLessThan(3)
  })
})
