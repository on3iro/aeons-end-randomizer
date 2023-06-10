import { calcBattleScore } from '../index'

describe('calcBattleScore()', () => {
  it('should return 0 for more than 3 tries', () => {
    expect(calcBattleScore(4)).toBe(0)
    expect(calcBattleScore(5)).toBe(0)
    expect(calcBattleScore(6)).toBe(0)
  })

  it('should return 6 for 1 try', () => {
    expect(calcBattleScore(1)).toBe(6)
  })

  it('should return 4 for 2 tries', () => {
    expect(calcBattleScore(2)).toBe(4)
  })

  it('should return 2 for 3 tries', () => {
    expect(calcBattleScore(3)).toBe(2)
  })
})
