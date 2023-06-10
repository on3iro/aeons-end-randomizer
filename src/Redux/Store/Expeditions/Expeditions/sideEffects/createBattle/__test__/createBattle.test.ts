import { createBattle } from '../index'
import * as types from 'aer-types/types'

import * as rollNemesisIdModule from '../rollNemesisId'
import * as getUpgradedBasicNemesisCardsResultModule from '../getUpgradedBasicNemesisCardsResult'
import { ExpeditionsStateSlice } from '../../../types'
import { NemesisContentStateSlice } from 'Redux/Store/Settings/Expansions/Nemeses/content'
import { UpgradedBasicNemesisCardContentStateSlice } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards/content'
import { SelectedLanguagesStateSlice } from 'Redux/Store/Settings/Expansions/Languages'

describe('createBattle()', () => {
  const inputSeed = { seed: 'test', supplyState: true, nemesisState: true }
  const inputBattle: types.Battle = {
    id: 'someBattle',
    type: 'battle',
    config: {
      tier: 2,
      newUBNCards: { type: 'regular', addRandom: true },
      treasure: {
        hasTreasure: false,
      },
    },
    expeditionId: 'expedition1',
    status: 'locked',
    tries: 0,
  }

  const makeGetExampleState = (
    battle: types.Battle = inputBattle
  ) => (): ExpeditionsStateSlice &
    NemesisContentStateSlice &
    UpgradedBasicNemesisCardContentStateSlice &
    SelectedLanguagesStateSlice => ({
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
            sequence: {
              firstBranchId: battle.id,
              branches: {
                [battle.id]: battle,
              },
            },
            upgradedBasicNemesisCards: ['Wreck'],
          } as types.Expedition,
        },
      },
    },
    Settings: {
      Expansions: {
        Languages: {
          AE: 'ENG',
          NA: 'ENG',
        },
        Nemeses: {
          content: {
            ENG: {
              CarapaceQueen: {
                expansion: 'AE',
                name: 'Carapace Queen',
                id: 'CarapaceQueen',
                health: 60,
                difficulty: 3,
                expeditionRating: 1 as types.ExpeditionRating,
                additionalInfo: '',
              },
              PrinceOfGluttons: {
                expansion: 'AE',
                name: 'Prince Of Gluttons',
                id: 'PrinceOfGluttons',
                health: 70,
                difficulty: 5,
                expeditionRating: 2 as types.ExpeditionRating,
                additionalInfo: '',
              },
            },
            PL: {},
            FR: {},
          },
        },
        UpgradedBasicNemesisCards: {
          content: {
            ENG: {
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
            PL: {},
            FR: {},
          },
        },
      },
    },
  })

  it('should create correct result', () => {
    const result = createBattle(
      makeGetExampleState(),
      inputBattle as types.Battle
    )

    expect(result).toEqual({
      battle: {
        expeditionId: 'expedition1',
        id: 'someBattle',
        type: 'battle',
        nemesisId: 'PrinceOfGluttons',
        config: {
          tier: 2,
          newUBNCards: { type: 'regular', addRandom: true },
          treasure: { hasTreasure: false },
        },
        status: 'before_battle',
        tries: 0,
      },
      upgradedBasicNemesisCardIds: ['Wreck', 'BaneCommander'],
      nemesisSeedState: expect.any(Object),
    })
  })

  test('handle "no nemesis available" by setting id to UNDEFINED', () => {
    const battle: types.Battle = {
      ...inputBattle,
      config: {
        tier: 3,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { hasTreasure: false },
      },
    }
    const result = createBattle(makeGetExampleState(battle), battle)

    expect(result).toEqual({
      battle: {
        expeditionId: 'expedition1',
        id: 'someBattle',
        type: 'battle',
        nemesisId: undefined,
        config: {
          tier: 3,
          newUBNCards: { type: 'regular', addRandom: true },
          treasure: { hasTreasure: false },
        },
        status: 'before_battle',
        tries: 0,
      },
      upgradedBasicNemesisCardIds: ['Wreck', 'BaneCommander'],
      nemesisSeedState: expect.any(Object),
    })
  })

  it('should use intermediate seed states', () => {
    const rollNemesisSpy = jest.spyOn(rollNemesisIdModule, 'rollNemesisId')

    const getUpgradedBasicNemesisCardsResultSpy = jest.spyOn(
      getUpgradedBasicNemesisCardsResultModule,
      'getUpgradedBasicNemesisCardsResult'
    )

    createBattle(makeGetExampleState(), inputBattle as types.Battle)

    expect(rollNemesisSpy).toHaveBeenCalledWith(
      ['PrinceOfGluttons'],
      expect.any(Function)
    )

    expect(getUpgradedBasicNemesisCardsResultSpy).toHaveBeenCalledWith(
      {
        tier: 2,
        newUBNCards: {
          type: 'regular',
          addRandom: true,
        },
        treasure: {
          hasTreasure: false,
        },
      },
      expect.any(Array), // FIXME we could probably be more strict with our test here
      ['Wreck'],
      expect.any(Function),
      rollNemesisSpy.mock.results[0].value.seed
    )

    rollNemesisSpy.mockRestore()
    getUpgradedBasicNemesisCardsResultSpy.mockRestore()
  })

  it('should handle "battle.config.nemesisId"', () => {
    const inputBattle = {
      id: 'someBattle',
      type: 'battle',
      config: {
        tier: 2,
        nemesisId: 'CarapaceQueen',
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: {
          hasTreasure: false,
        },
      },
      expeditionId: 'expedition1',
      status: 'locked',
      tries: 0,
    }

    const result = createBattle(
      makeGetExampleState(),
      inputBattle as types.Battle
    )

    expect(result).toEqual({
      battle: {
        expeditionId: 'expedition1',
        id: 'someBattle',
        type: 'battle',
        nemesisId: 'CarapaceQueen',
        config: {
          nemesisId: 'CarapaceQueen',
          tier: 2,
          newUBNCards: { type: 'regular', addRandom: true },
          treasure: { hasTreasure: false },
        },
        status: 'before_battle',
        tries: 0,
      },
      upgradedBasicNemesisCardIds: ['Wreck', 'HissingAcid'],

      nemesisSeedState: expect.any(Object),
    })
  })
})
