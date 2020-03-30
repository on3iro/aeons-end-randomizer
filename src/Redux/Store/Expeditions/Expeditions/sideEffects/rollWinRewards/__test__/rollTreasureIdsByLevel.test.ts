import { rollTreasureIdsByLevel } from '../rollTreasureIdsByLevel'

describe('rollTreasureIdsByLevel()', () => {
  test('result should be empty, if no more ids are available', () => {
    const result = rollTreasureIdsByLevel([], 2, undefined, {
      seed: 'test',
      state: true,
    })

    expect(result.result).toEqual([])
  })

  test('seed should be input seed, if no more ids are available', () => {
    const inputSeed = { seed: 'test', state: true }

    const result = rollTreasureIdsByLevel([], 2, undefined, inputSeed)

    expect(result.seed).toBe(inputSeed)
  })

  test('result should contain correct amount of ids', () => {
    const inputSeed = { seed: 'test', state: true }

    const result = rollTreasureIdsByLevel(
      ['a', 'b', 'c'],
      2,
      undefined, // uses getRandomEntity by default
      inputSeed
    )

    expect(result.result.length).toBe(2)
  })

  test('result seed state should be different from input seed state', () => {
    const inputSeed = { seed: 'test', state: true }

    const result = rollTreasureIdsByLevel(
      ['a', 'b', 'c'],
      2,
      undefined, // uses getRandomEntity by default
      inputSeed
    )

    expect(result.seed.seed).toBe(inputSeed.seed)
    expect(result.seed.state).not.toEqual(inputSeed.state)
  })
})
