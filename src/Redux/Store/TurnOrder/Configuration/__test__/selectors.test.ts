import config from 'config'

import {
  ModeStateSlice,
  SelectedPlayerCountStateSlice,
  SelectedSetupStateSlice,
} from '../types'

import { selectors } from 'Redux/Store/TurnOrder/Configuration/selectors'

const mockConfiguration: ModeStateSlice &
  SelectedPlayerCountStateSlice &
  SelectedSetupStateSlice = {
  TurnOrder: {
    Configuration: {
      Mode: 'Blitz',
      SelectedPlayerCount: config.TURNORDERSETUPS['fourPlayers'],
      SelectedSetup:
        config.TURNORDERSETUPS['fourPlayers'].variations['default'],
    },
  },
}

describe('TurnOrder | Configuration | selectors', () => {
  it('should get the current mode with getMode()', () => {
    const result = selectors.getMode(mockConfiguration)

    expect(result).toBe('Blitz')
  })

  it('should get the current player count with getSelectedPlayerCount()', () => {
    const expected = {
      id: 'fourPlayers',
      name: '4',
      variations: {
        default: {
          id: 'default',
          name: 'Default',
          turnOrderCards: [
            config.TURNORDERCARDS['player1-1'],
            config.TURNORDERCARDS['player2-1'],
            config.TURNORDERCARDS['player3-1'],
            config.TURNORDERCARDS['player4-1'],
            config.TURNORDERCARDS['nemesis-1'],
            config.TURNORDERCARDS['nemesis-2'],
          ],
        },
        splitPlayers: {
          id: 'splitPlayers',
          name: 'Split Player Cards (1/2, 3/4)',
          turnOrderCards: [
            config.TURNORDERCARDS['player12-1'],
            config.TURNORDERCARDS['player12-2'],
            config.TURNORDERCARDS['player34-1'],
            config.TURNORDERCARDS['player34-2'],
            config.TURNORDERCARDS['nemesis-1'],
            config.TURNORDERCARDS['nemesis-2'],
          ],
        },
      },
    }

    const result = selectors.getSelectedPlayerCount(mockConfiguration)

    expect(result).toEqual(expected)
  })

  it('should get the current setup with getSelectedSetup()', () => {
    const expected = {
      id: 'default',
      name: 'Default',
      turnOrderCards: [
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player2-1'],
        config.TURNORDERCARDS['player3-1'],
        config.TURNORDERCARDS['player4-1'],
        config.TURNORDERCARDS['nemesis-1'],
        config.TURNORDERCARDS['nemesis-2'],
      ],
    }

    const result = selectors.getSelectedSetup(mockConfiguration)

    expect(result).toEqual(expected)
  })

  it('should get the current configuration with getConfiguration()', () => {
    const expected = {
      id: 'default',
      name: 'Default',
      turnOrderCards: [
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player2-1'],
        config.TURNORDERCARDS['player3-1'],
        config.TURNORDERCARDS['player4-1'],
        config.TURNORDERCARDS['blitz'],
        config.TURNORDERCARDS['nemesis-2'],
      ],
    }

    const result = selectors.getConfiguration(mockConfiguration)

    expect(result).toEqual(expected)
  })

  it('should get the available cards with getAvailableCards()', () => {
    const expected = [
      config.TURNORDERCARDS['player1-1'],
      config.TURNORDERCARDS['player2-1'],
      config.TURNORDERCARDS['player3-1'],
      config.TURNORDERCARDS['player4-1'],
      config.TURNORDERCARDS['blitz'],
      config.TURNORDERCARDS['nemesis-2'],
    ]

    const result = selectors.getAvailableCards(mockConfiguration)

    expect(result).toEqual(expected)
  })
})
