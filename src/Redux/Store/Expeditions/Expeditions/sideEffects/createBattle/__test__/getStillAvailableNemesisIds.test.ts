import { getStillAvailableNemesisIds } from '../getStillAvailableNemesisIds'

describe('getStillAvailableNemesisIds()', () => {
  it('should return empty [] if no nemesis are available', () => {
    const result = getStillAvailableNemesisIds([], ['test'], 1)

    expect(result).toEqual([])
  })

  it('should return empty array, if no nemesis for tier are available', () => {
    const result = getStillAvailableNemesisIds(
      [{ id: 'a', expeditionRating: 2 }],
      ['test'],
      1
    )

    expect(result).toEqual([])
  })

  it('should return empty [] if all avalable are part of previous nemeses', () => {
    const result = getStillAvailableNemesisIds(
      [{ id: 'a', expeditionRating: 1 }],
      ['a'],
      1
    )

    expect(result).toEqual([])
  })

  it('should return ids of all available if there are not previous nemeses', () => {
    const result = getStillAvailableNemesisIds(
      [{ id: 'a', expeditionRating: 1 }],
      [],
      1
    )

    expect(result).toEqual(['a'])
  })

  it('should return ids of available filtered by previous', () => {
    const result = getStillAvailableNemesisIds(
      [
        { id: 'a', expeditionRating: 1 },
        { id: 'b', expeditionRating: 1 },
      ],
      ['b'],
      1
    )

    expect(result).toEqual(['a'])
  })
})
