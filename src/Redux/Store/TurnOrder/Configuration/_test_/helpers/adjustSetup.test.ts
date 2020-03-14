import config from 'config'

import { adjustSetup } from 'Redux/Store/TurnOrder/Configuration/helpers'

describe('adjustSetup()', () => {
  const defaultVariation =
    config.TURNORDERSETUPS.twoPlayers.variations['default']

  it('it should not change the default variation of tocs for 2 players', () => {
    const setup = adjustSetup('Default', defaultVariation)

    expect(setup.turnOrderCards.length).toBe(6)
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['player1-1'])
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['player1-2'])
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['player2-1'])
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['player2-2'])
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['nemesis-1'])
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['nemesis-2'])
  })

  it('it should switch the nemesis-1 card with maelstrom', () => {
    const setup = adjustSetup('Maelstrom', defaultVariation)

    expect(setup.turnOrderCards.length).toBe(6)
    expect(setup.turnOrderCards).not.toContain(
      config.TURNORDERCARDS['nemesis-1']
    )
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['maelstrom'])
  })

  it('it should switch the nemesis-1 card with blitz', () => {
    const setup = adjustSetup('Blitz', defaultVariation)

    expect(setup.turnOrderCards.length).toBe(6)
    expect(setup.turnOrderCards).not.toContain(
      config.TURNORDERCARDS['nemesis-1']
    )
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['blitz'])
  })

  it('it should switch the nemesis cards with maelstrom and blitz', () => {
    const setup = adjustSetup('Blitz + Maelstrom', defaultVariation)

    expect(setup.turnOrderCards.length).toBe(6)
    expect(setup.turnOrderCards).not.toContain(
      config.TURNORDERCARDS['nemesis-1']
    )
    expect(setup.turnOrderCards).not.toContain(
      config.TURNORDERCARDS['nemesis-2']
    )
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['maelstrom'])
    expect(setup.turnOrderCards).toContain(config.TURNORDERCARDS['blitz'])
  })
})
