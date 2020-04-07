import { sortByCardType } from '../index'

describe('sortByCardType()', () => {
  it('should put Gems first', () => {
    const gemVsSpell = sortByCardType({ type: 'Gem' }, { type: 'Spell' })
    expect(gemVsSpell).toBe(-1)

    const gemVsRelic = sortByCardType({ type: 'Gem' }, { type: 'Relic' })
    expect(gemVsRelic).toBe(-1)

    const spellVsGem = sortByCardType({ type: 'Spell' }, { type: 'Gem' })
    expect(spellVsGem).toBe(1)

    const relicVsGem = sortByCardType({ type: 'Relic' }, { type: 'Gem' })
    expect(relicVsGem).toBe(1)
  })

  it('should put Relics before spells', () => {
    const spellVsRelic = sortByCardType({ type: 'Spell' }, { type: 'Relic' })
    expect(spellVsRelic).toBe(1)

    const relicVsSpell = sortByCardType({ type: 'Relic' }, { type: 'Spell' })
    expect(relicVsSpell).toBe(-1)
  })
})
