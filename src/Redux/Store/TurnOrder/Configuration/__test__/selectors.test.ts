import AERData from 'aer-data/src/index'

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
      SelectedPlayerCount: AERData.turnordersetups['fourPlayers'],
      SelectedSetup:
        AERData.turnordersetups['fourPlayers'].variations['default'],
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
            AERData.turnordercards['player1-1'],
            AERData.turnordercards['player2-1'],
            AERData.turnordercards['player3-1'],
            AERData.turnordercards['player4-1'],
            AERData.turnordercards['nemesis-1'],
            AERData.turnordercards['nemesis-2'],
          ],
        },
        splitPlayers: {
          id: 'splitPlayers',
          name: 'Split Player Cards (1/2, 3/4)',
          turnOrderCards: [
            AERData.turnordercards['player12-1'],
            AERData.turnordercards['player12-2'],
            AERData.turnordercards['player34-1'],
            AERData.turnordercards['player34-2'],
            AERData.turnordercards['nemesis-1'],
            AERData.turnordercards['nemesis-2'],
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
        AERData.turnordercards['player1-1'],
        AERData.turnordercards['player2-1'],
        AERData.turnordercards['player3-1'],
        AERData.turnordercards['player4-1'],
        AERData.turnordercards['nemesis-1'],
        AERData.turnordercards['nemesis-2'],
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
        AERData.turnordercards['player1-1'],
        AERData.turnordercards['player2-1'],
        AERData.turnordercards['player3-1'],
        AERData.turnordercards['player4-1'],
        AERData.turnordercards['blitz'],
        AERData.turnordercards['nemesis-2'],
      ],
    }

    const result = selectors.getConfiguration(mockConfiguration)

    expect(result).toEqual(expected)
  })

  it('should get the available cards with getAvailableCards()', () => {
    const expected = [
      AERData.turnordercards['player1-1'],
      AERData.turnordercards['player2-1'],
      AERData.turnordercards['player3-1'],
      AERData.turnordercards['player4-1'],
      AERData.turnordercards['blitz'],
      AERData.turnordercards['nemesis-2'],
    ]

    const result = selectors.getAvailableCards(mockConfiguration)

    expect(result).toEqual(expected)
  })
})
