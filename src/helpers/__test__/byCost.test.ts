import { byCost } from '../index'

describe('byCost()', () => {
  it('should put a first if it does not have cost', () => {
    expect(byCost({}, { cost: 1 })).toBe(-1)
  })

  it('should put b second, if it has no cost', () => {
    expect(byCost({ cost: 1 }, {})).toBe(1)
  })

  it('should put a first, if cost is lower than b.cost', () => {
    expect(byCost({ cost: 1 }, { cost: 2 })).toBe(-1)
  })

  it('should put b first, if cost is lower than a.cost', () => {
    expect(byCost({ cost: 2 }, { cost: 1 })).toBe(1)
  })

  it('shold keep order if a.cost === b.cost', () => {
    expect(byCost({ cost: 2 }, { cost: 2 })).toBe(0)
  })
})
