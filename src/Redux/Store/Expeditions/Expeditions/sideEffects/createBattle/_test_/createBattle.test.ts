import { createBattle } from '../index'
import * as types from 'types'

describe('createBattle()', () => {
  const inputSeed = { seed: 'test', supplyState: true, nemesisState: true }
  const inputBattle = {
    id: 'someBattle',
    nemesisTier: {
      tier: 2,
      isNewTier: true,
    },
    treasure: {
      hasTreasure: false,
    },
    expeditionId: 'expedition1',
    status: 'locked',
    tries: 0,
  }

  const getExampleState = () => ({
    Expeditions: {
      Expeditions: {
        expeditions: {
          expedition1: {
            id: 'expedition1',
            settingsSnapshot: {
              availableNemesisIds: ['CarapaceQueen', 'PrinceOfGluttons'],
              availableUpgradedBasicNemesisCardIds: [
                'BaneCommander',
                'Wreck',
                'HissingAcid',
              ],
            },
            seed: inputSeed,
            battles: [inputBattle],
            upgradedBasicNemesisCards: ['Wreck'],
          } as types.Expedition,
        },
      },
    },
    Settings: {
      Expansions: {
        SelectedNemeses: {
          nemeses: {
            CarapaceQueen: {
              expansion: 'AE',
              name: 'Carapace Queen',
              id: 'CarapaceQueen',
              health: 60,
              difficulty: 3,
              expeditionRating: 1 as types.ExpeditionRating,
              additionalInfo: '',
              selected: true,
            },
            PrinceOfGluttons: {
              expansion: 'AE',
              name: 'Prince Of Gluttons',
              id: 'PrinceOfGluttons',
              health: 70,
              difficulty: 5,
              expeditionRating: 2 as types.ExpeditionRating,
              additionalInfo: '',
              selected: true,
            },
          },
          nemesisIds: ['CarapaceQueen'],
        },
        UpgradedBasicNemesisCards: {
          upgradedBasicNemesisCards: {
            HissingAcid: {
              id: 'HissingAcid',
              name: 'Hissing Acid',
              expansion: 'NA',
              tier: 1,
              type: 'Power',
              power: 3,
              effect:
                '\n      <p>\n        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />\n        <br /> \n        <b>Power 3:</b> Reveal the top card of the turn order deck. If it\'s a player turn order card, Unleash three times. Otherwise, any player suffers 5 damage.\n      </p>\n    ',
              upgraded: true,
              selected: true,
            } as types.UpgradedBasicNemesisCard & { selected: boolean },
            Wreck: {
              id: 'Wreck',
              name: 'Wreck',
              expansion: 'NA',
              tier: 1,
              type: 'Attack',
              effect:
                '\n      <p>\n        Unleash twice. Gravehold suffers 1 damage.\n      </p>\n    ',
              upgraded: true,
              selected: true,
            } as types.UpgradedBasicNemesisCard & { selected: boolean },
            BaneCommander: {
              id: 'BaneCommander',
              name: 'Bane Commander',
              expansion: 'NA',
              tier: 1,
              type: 'Minion',
              hp: 6,
              effect:
                '\n      <p>\n        <b>Persistent:</b> Unleash. Any player suffers 1 damage.\n      </p>\n    ',
              upgraded: true,
              selected: true,
            } as types.UpgradedBasicNemesisCard & { selected: boolean },
          },
          upgradedBasicNemesisCardIds: [
            'BaneCommander',
            'HissingAcid',
            'Wreck',
          ],
        },
      },
    },
  })

  it('should create correct result', () => {
    const result = createBattle(getExampleState, inputBattle as types.Battle)

    expect(result).toEqual({
      battle: {
        expeditionId: 'expedition1',
        id: 'someBattle',
        nemesisId: 'PrinceOfGluttons',
        nemesisTier: {
          isNewTier: true,
          tier: 2,
        },
        status: 'before_battle',
        treasure: {
          hasTreasure: false,
        },
        tries: 0,
      },
      upgradedBasicNemesisCardIds: ['Wreck', 'BaneCommander'],
      nemesisSeedState: expect.any(Object),
    })
  })

  it.skip('should use intermediate seed states', () => {
    const rollSupplySpy = jest.spyOn(
      rollSupplyRewardsModule,
      'rollSupplyRewards'
    )
    const rollTreasuresSpy = jest.spyOn(
      rollTreasureIdsByLevelModule,
      'rollTreasureIdsByLevel'
    )

    rollWinRewards(getExampleState, {
      id: 'someBattle',
      expeditionId: 'expedition1',
      treasure: {
        hasTreasure: true,
        level: 2,
      },
    } as types.Battle)

    expect(rollTreasuresSpy).toHaveBeenCalledWith(
      ['t1'],
      3,
      expect.any(Function),
      { seed: inputSeed.seed, state: inputSeed.supplyState }
    )

    expect(rollSupplySpy).toHaveBeenCalledWith(
      [],
      [],
      ['spell1'],
      rollTreasuresSpy.mock.results[0].value.seed
    )

    rollSupplySpy.mockRestore()
    rollTreasuresSpy.mockRestore()
  })
})
