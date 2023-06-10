import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb, get as getFromDb } from 'idb-keyval'

import * as types from 'aer-types/types'
import { Reducer, initialState } from '../reducer'
import { actions } from '../actions'
import { actions as rootActions } from 'Redux/Store'
import { EXPEDITIONS_DB_KEY } from '../reducerHelpers/helpers'
import * as sideEffects from '../sideEffects'
import {
  expedition1,
  expedition2,
} from 'Redux/Store/Expeditions/Expeditions/__test__/__fixtures__/expeditions'
import { migrate } from 'Redux/Store/Expeditions/Expeditions/migrations'

describe('Reducer()', () => {
  it('should return initial state', () => {
    // @ts-ignore disable-line
    expect(Reducer(undefined, { type: 'SOMETHING' })).toEqual({
      expeditions: {},
      expeditionIds: [],
    })
  })

  it('should handle CREATE_EXPEDITION', () => {
    const baseConfig = {
      variantId: 'SHORT',
      name: 'Test-Expedition',
      bigPocketVariant: false,
      marketId: 'random',
    }

    const result = Reducer(initialState, actions.createExpedition(baseConfig))

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(initialState)

    expect(cmd).toEqual(
      Cmd.run(sideEffects.createExpedition, {
        args: [Cmd.getState, baseConfig],
        successActionCreator: actions.createExpeditionSuccess,
      })
    )
  })

  it('should handle CREATE_EXPEDITION_SUCCESS', () => {
    const result = Reducer(
      initialState,
      actions.createExpeditionSuccess(expedition1 as types.Expedition)
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual({
      expeditions: {
        Expedition1: expedition1,
      },
      expeditionIds: ['Expedition1'],
    })

    expect(cmd).toEqual(
      Cmd.list([
        Cmd.run(setToDb, {
          args: [EXPEDITIONS_DB_KEY, model],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        }),
        Cmd.action(
          rootActions.Snackbars.queue({
            type: 'success',
            message: 'Expedition created successfully!',
          })
        ),
      ])
    )
  })

  it('should handle DELETE_EXPEDITION', () => {
    const result = Reducer(
      {
        expeditions: {
          Expedition1: expedition1 as types.Expedition,
        },
        expeditionIds: ['Expedition1'],
      },
      actions.deleteExpedition('Expedition1')
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual({
      expeditions: {},
      expeditionIds: [],
    })

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle ROLL_BATTLE', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      config: {
        tier: 2,
        newUBNCards: { ids: [], addRandom: true },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(state, actions.rollBattle(battle))

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(state)

    expect(cmd).toEqual(
      Cmd.run(sideEffects.createBattle, {
        args: [Cmd.getState, battle],
        successActionCreator: actions.rollBattleSuccess,
      })
    )
  })

  it('should handle ROLL_BATTLE_SUCCESS', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      config: {
        tier: 2,
        newUBNCards: { ids: [], addRandom: true },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      expeditionId: 'Expedition1',
      status: 'before_battle',
      tries: 0,
      nemesisId: 'Arachnos',
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(
      state,
      actions.rollBattleSuccess({
        battle,
        upgradedBasicNemesisCardIds: ['TEST'],
        nemesisSeedState: true,
      })
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    const { branches } = expedition1.sequence

    const updatedBranches = {
      ...branches,
      [battle.id]: battle,
    }

    expect(model).toEqual({
      ...state,
      expeditions: {
        ...state.expeditions,
        [battle.expeditionId]: {
          ...expedition1,
          seed: {
            ...expedition1.seed,
            nemesisState: true,
          },
          upgradedBasicNemesisCards: ['TEST'],
          sequence: {
            ...expedition1.sequence,
            branches: updatedBranches,
          },
        },
      },
    })

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle START_BATTLE', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      config: {
        tier: 2,
        newUBNCards: { ids: [], addRandom: true },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(state, actions.startBattle(battle))

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toMatchSnapshot()

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle WIN_BATTLE', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      config: {
        tier: 2,
        newUBNCards: { ids: [], addRandom: true },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(state, actions.winBattle(battle))

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(state)

    expect(cmd).toEqual(
      Cmd.run(sideEffects.createWinRewards, {
        args: [Cmd.getState, battle],
        successActionCreator: actions.winBattleSuccess,
      })
    )
  })

  it('should handle WIN_BATTLE_SUCCESS', () => {
    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(
      state,
      actions.winBattleSuccess({
        battle: {
          id: 'YBsJLx4PfV',
          type: 'battle',
          config: {
            tier: 2,
            newUBNCards: { ids: [], addRandom: true },
            treasure: {
              level: 2,
              hasTreasure: true,
            },
          },
          expeditionId: 'Expedition1',
          status: 'started',
          tries: 1,
          nemesisId: 'Arachnos',
          rewards: {
            treasure: ['TheBrokenMask', 'ImbuedShackles', 'CronesAmulet'],
            supplyIds: ['HauntedBerylite', 'BottledStar', 'PyrotechnicSurge'],
          },
        },
        seed: {
          seed: 'Expedition1',
          state: { something: 'something' },
        },
      })
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toMatchSnapshot()

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle LOSE_BATTLE', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      config: {
        tier: 2,
        newUBNCards: { ids: [], addRandom: true },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(state, actions.loseBattle(battle))

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toMatchSnapshot()

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle ROLL_LOSS', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      config: {
        tier: 2,
        newUBNCards: { ids: [], addRandom: true },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(state, actions.rollLoss(battle, 'mage'))

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(state)

    expect(cmd).toEqual(
      Cmd.run(sideEffects.createLossRewards, {
        args: [Cmd.getState, battle, 'mage'],
        successActionCreator: actions.rollLossSuccess,
      })
    )
  })

  it('should handle ROLL_LOSS_SUCCESS', () => {
    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(
      state,
      actions.rollLossSuccess({
        id: 'YBsJLx4PfV',
        type: 'battle',
        config: {
          tier: 2,
          newUBNCards: { ids: [], addRandom: true },
          treasure: {
            level: 2,
            hasTreasure: true,
          },
        },
        expeditionId: 'Expedition1',
        status: 'started',
        tries: 1,
        nemesisId: 'Arachnos',
        rewards: {
          treasure: ['TheBrokenMask', 'ImbuedShackles', 'CronesAmulet'],
          supplyIds: ['HauntedBerylite', 'BottledStar', 'PyrotechnicSurge'],
        },
        seed: {
          seed: 'Expedition1',
          state: { something: 'something' },
        },
      })
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toMatchSnapshot()

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle ACCEPT_LOSS with rewards', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      nextBranchId: '0t22iBGUff',
      config: {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      rewards: {
        mages: ['Adelheim'],
        treasure: ['AlchemistsAlembic'],
        supplyIds: [],
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(
      state,
      actions.acceptLoss(battle, ['DiamondCluster'], ['Jade'])
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toMatchSnapshot()

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle ACCEPT_LOSS without rewards', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      nextBranchId: '0t22iBGUff',
      config: {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(
      state,
      actions.acceptLoss(battle, ['DiamondCluster'], [])
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toMatchSnapshot()

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle ACCEPT_LOSS with "onLoss: skip"', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      nextBranchId: '0t22iBGUff',
      config: {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        onLoss: 'skip',
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      rewards: {
        mages: ['Adelheim'],
        treasure: ['AlchemistsAlembic'],
        supplyIds: [],
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: {
          ...expedition1,
          sequence: {
            ...expedition1.sequence,
            branches: {
              ...expedition1.sequence.branches,
              YBsJLx4PfV: battle,
            },
          },
        } as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(
      state,
      actions.acceptLoss(battle, ['DiamondCluster'], ['Jade'])
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual({
      expeditionIds: ['Expedition1'],
      expeditions: {
        Expedition1: {
          banished: [
            'SearingRuby',
            'RecurringJasper',
            'PainStone',
            'DiamondCluster',
          ],
          barracks: {
            mageIds: ['Qu', 'Mazra', 'Nook', 'Sparrow', 'Gygar', 'Adelheim'],
            supplyIds: ['Jade'],
            treasureIds: [
              'SparrowsAid',
              'MistsAmethystParagon',
              'BramasBuriedLight',
              'XaxosPyre',
              'IndirasLoneOpal',
              'AlchemistsAlembic',
            ],
          },
          bigPocketVariant: false,
          finished: false,
          id: 'Expedition1',
          name: 'test',
          score: 4,
          seed: {
            nemesisState: true,
            seed: 'Expedition1',
            supplyState: true,
          },
          sequence: {
            branches: {
              '0t22iBGUff': {
                config: {
                  newUBNCards: {
                    addRandom: true,
                    type: 'regular',
                  },
                  tier: 3,
                  treasure: {
                    hasTreasure: true,
                    level: 3,
                  },
                },
                expeditionId: 'Expedition1',
                id: '0t22iBGUff',
                nextBranchId: 'wXBtzLO1bM',
                status: 'unlocked',
                tries: 0,
                type: 'battle',
              },
              CvghslX3mK: {
                config: {
                  newUBNCards: {
                    addRandom: false,
                    type: 'regular',
                  },
                  tier: 1,
                  treasure: {
                    hasTreasure: true,
                    level: 1,
                  },
                },
                expeditionId: 'Expedition1',
                id: 'CvghslX3mK',
                nemesisId: 'KnightOfShackles',
                nextBranchId: 'YBsJLx4PfV',
                rewards: {
                  mages: [],
                  supplyIds: [
                    'DiamondCluster',
                    'PainConduit',
                    'ThoughtformFamiliar',
                  ],
                  treasure: [
                    'SparrowsAid',
                    'MistsAmethystParagon',
                    'BramasBuriedLight',
                    'XaxosPyre',
                    'IndirasLoneOpal',
                  ],
                },
                status: 'finished',
                tries: 2,
                type: 'battle',
              },
              YBsJLx4PfV: {
                config: {
                  newUBNCards: {
                    addRandom: true,
                    type: 'regular',
                  },
                  onLoss: 'skip',
                  tier: 2,
                  treasure: {
                    hasTreasure: true,
                    level: 2,
                  },
                },
                expeditionId: 'Expedition1',
                id: 'YBsJLx4PfV',
                nextBranchId: '0t22iBGUff',
                rewards: undefined,
                status: 'finished',
                tries: 0,
                type: 'battle',
              },
              wXBtzLO1bM: {
                config: {
                  newUBNCards: {
                    addRandom: true,
                    type: 'regular',
                  },
                  tier: 4,
                  treasure: {
                    hasTreasure: false,
                  },
                },
                expeditionId: 'Expedition1',
                id: 'wXBtzLO1bM',
                status: 'locked',
                tries: 0,
                type: 'battle',
              },
            },
            firstBranchId: 'CvghslX3mK',
          },
          settingsSnapshot: {
            availableCardIds: [
              'DiamondCluster',
              'ChaosArc',
              'Ignite',
              'EssenceTheft',
              'SearingRuby',
              'FeralLightning',
              'PlanarInsight',
              'SpectralEcho',
              'BurningOpal',
              'ConsumingVoid',
              'UnstablePrism',
              'CloudedSapphire',
              'MagesTalisman',
              'FlexingDagger',
              'LavaTendril',
              'BottledVortex',
              'ArcaneNexus',
              'DarkFire',
              'PhoenixFlame',
              'Jade',
              'AmplifyVision',
              'VriswoodAmber',
              'BlastingStaff',
              'SiftersPearl',
              'WildfireWhip',
              'FocusingOrb',
              'OblivionSwell',
              'TripliteCore',
              'NerveJab',
              'DoubleTap',
              'ObliviumResin',
              'Summonite',
              'ManifoldContainer',
              'DrainingTouch',
              'JoltingCrust',
              'MentiteChunk',
              'SoulCords',
              'VoidiumSpike',
              'PrecisionShot',
              'MutedLacosite',
              'BladeOfWisdom',
              'StunningForce',
              'FlashOfIntellect',
              'ScholarsOpus',
              'BottledStar',
              'BurningCurrent',
              'PsychicEruption',
              'LivingGauntlet',
              'ShiningTetrite',
              'VoidBond',
              'Combustion',
              'VimDynamo',
              'DisintegratingScythe',
              'MonstrousInferno',
              'DevouringShadow',
              'BanishingTopaz',
              'Transmogrifier',
              'JeweledBrain',
              'BlastSphere',
              'WoundMender',
              'LurkingSionite',
              'UnrefinedBlaststone',
              'Exogranite',
              'RecurringJasper',
              'EnergizedRubidium',
              'ResonantPearl',
              'CagedFire',
              'GalvanizedBauble',
              'AetherConduit',
              'WellOfEnergy',
              'PainConduit',
              'LinkConduit',
              'MarbleGalaxy',
              'DelugeOfPower',
              'ReverberatingShock',
              'FatalHarmony',
              'BouncingBoom',
              'SpiritLift',
              'Tethered Darts',
              'ForceAmplifier',
              'ImbuedSmash',
              'PatternStrike',
              'MoltenHammer',
              'Radiance',
              'Blaze',
              'ScryingBolt',
              'SagesBrand',
              'LeechingAgate',
              'TemporalHelix',
              'Char',
              'AlienElement',
              'Scorch',
              'Pyromancy',
              'FeedbackAura',
              'Catalyst',
              'PainStone',
              'AstralCube',
              'RiddleSphere',
              'NetherConduit',
              'HauntedBerylite',
              'Olivinite',
              'CacheGlass',
              'ReflectiveConduit',
              'WillWeaver',
              'BreachSeeker',
              'CrescendoRay',
              'StormVapors',
              'MantraOfStrength',
              'EmbodyFlame',
              'SnapRitual',
              'ShiningFluorite',
              'PolyphaseTurbine',
              'BreachExtractor',
              'FocusingConduit',
              'DualFlash',
              'DustCaller',
              'SymbioticSynapse',
              'FossilizedScarab',
              'ThermalDart',
              'Resonate',
              'Conflagration',
              'DimensionalKey',
              'InnerFire',
              'Fulminate',
              'EternityCharm',
              'ErraticIngot',
              'ReduceToAsh',
              'VortexGauntlet',
              'Carbonize',
              'Equilibrium',
              'VolcanicGlass',
              'ConvectionField',
              'JaggedLightning',
              'BloodstoneJewel',
              'Kindle',
              'ThoughtformFamiliar',
              'Crystallize',
              'FieryTorrent',
              'CelestialSpire',
              'ConjureTheLost',
              'NovaForge',
              'DreadDiamond',
              'CairnCompass',
              'ScoriaSlag',
              'BreachOre',
              'FiendCatcher',
              'PyrotechnicSurge',
              'Aurora',
              'ConclaveScroll',
              'PrimordialFetish',
              'FrozenMagmite',
              'MagesTotem',
              'DrownInFlames',
              'FleetingVision',
              'SplinterMissile',
              'EchoStone',
              'ThievingSpirit',
              'FracturedQuartz',
              'RockLauncher',
              'AbacusOfIgnition',
              'IlluminatingFlame',
              'ChronalArc',
            ],
            availableMageIds: [
              'Adelheim',
              'Brama',
              'Jian',
              'Kadir',
              'Lash',
              'Mist',
              'Phaedraxa',
              'Xaxos',
              'Nym',
              'Reeve',
              'Zhana',
              'Inco',
              'Razra',
              'Sahala',
              'Gygar',
              'Soskel',
              'Taqren',
              'Talix',
              'Rhia',
              'Claudia',
              'Lost',
              'Malastar',
              'Indira',
              'Remnant',
              'Nook',
              'Mazra',
              'Qu',
              'Sparrow',
              'XaxosTV',
              'Dezmodia',
              'Garu',
              'Gex',
              'Mazahaedron',
              'MistWE',
              'Quilius',
              'Ulgimor',
              'YanMagda',
            ],
            availableNemesisIds: [
              'CarapaceQueen',
              'CrookedMask',
              'PrinceOfGluttons',
              'Rageborne',
              'HordeCrone',
              'Necroswarm',
              'Maggoth',
              'Arachnos',
              'AgelessWalker',
              'Fenrix',
              'BlightLord',
              'WaywardOne',
              'ThriceDeadProphet',
              'Wraithmonger',
              'TheWailing',
              'TheWanderer',
              'KnightOfShackles',
              'MaidenOfThorns',
              'GateWitch',
              'HollowCrown',
              'MagusOfCloaks',
              'UmbraTitan',
            ],
            availableTreasureIds: [
              'DezmodiasOblivionShard',
              'UlgimorsCoalFragment',
              'IndirasLoneOpal',
              'MistsAmethystParagon',
              'MalastarsImmolate',
              'YanMagdasIlluminate',
              'EyeOfTheMaelstrom',
              'WellOfDespair',
              'CronesAmulet',
              'EdibleFungusChunks',
              'UmbralHornOfWar',
              'TheBrokenMask',
              'AlchemistsAlembic',
              'SoothsayersPouch',
              'SuppressingPin',
              'Quicksilver',
              'BandOfRetrieval',
              'PurifiedBangle',
              'KadirsEmeraldShard',
              'GexsShatteredGeode',
              'JiansMoonstoneShard',
              'LashsQuartzShard',
              'XaxosFlare',
              'AdelheimsAmethystShard',
              'BramasBuriedLight',
              'GarusTorch',
              'XaxosPyre',
              'MistsGarnetShard',
              'ShimmeringCloakOfTheMagus',
              'ImbuedShackles',
              'GluttonsTooth',
              'CoreOfRage',
              'CleansingAmulet',
              'CarapaceFragement',
              'ThornedWhip',
              'BonesOfDeathmind',
              'AcceleratingGauntlets',
              'EssenceExtractor',
              'BroochOfAttunment',
              'BladedCrystal',
              'PrismOfDestruction',
              'ForgottenTrinket',
              'PrecisionMagnifier',
              'ShroudOfObfucation',
              'VerdantStaff',
              'FlowingMantle',
              'MazahaedronsWorldheartShard',
              'PhaedraxasTourmalineShard',
              'FracturedShell',
              'Extra-DimensionalLens',
              'SeersBracer',
              'RemnantsVoidShard',
              'QuiliussErasure',
              'ZhanasFleetingEmber',
              'BlightedRootClump',
              'PetrifiedWitchFinger',
              'WaywardScraps',
              'TrueSightMonocle',
              'EntwinedAetherStrands',
              'SiphoningBlade',
              'GemEncrustedAnklet',
              'ReevesRavenShard',
              'NymsVision',
              'SparrowsAid',
              'WraithsEssence',
              'VolatileClasp',
              'BreachStabilizer',
              'FangedChoker',
              'EndlessBandolier',
            ],
            availableUpgradedBasicNemesisCardIds: [
              'HissingAcid',
              'Wreck',
              'BaneCommander',
              'SkyTremor',
              'EngulfingMadness',
              'Separate',
              'NeedleDoom',
              'Marked',
              'Eradicate',
              'FlashOfDecay',
              'Terrify',
              'RayOfDesolation',
              'ThunderousTempest',
              'Sacrifice',
              'Burialskulk',
              'Rupture',
              'FurrowOfDestruction',
              'Mangle',
              'HowlingSlayer',
            ],
            supplySetup: {
              active: true,
              default: true,
              id: 'random',
              name: 'Random Setup (Default)',
              tiles: [
                {
                  operation: 'ANY',
                  type: 'Gem',
                },
                {
                  operation: 'ANY',
                  type: 'Gem',
                },
                {
                  operation: 'ANY',
                  type: 'Gem',
                },
                {
                  operation: 'ANY',
                  type: 'Relic',
                },
                {
                  operation: 'ANY',
                  type: 'Relic',
                },
                {
                  operation: 'ANY',
                  type: 'Spell',
                },
                {
                  operation: 'ANY',
                  type: 'Spell',
                },
                {
                  operation: 'ANY',
                  type: 'Spell',
                },
                {
                  operation: 'ANY',
                  type: 'Spell',
                },
              ],
              type: 'official',
            },
            usedExpansions: [
              'AE',
              'BS',
              'Depths',
              'IW',
              'NA',
              'Nameless',
              'OD',
              'SD',
              'TA',
              'TV',
              'WE',
              'promos',
            ],
          },
          upgradedBasicNemesisCards: [],
        },
      },
    })

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle FINISH_BATTLE', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      type: 'battle',
      config: {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      rewards: {
        treasure: ['AlchemistsAlembic'],
        supplyIds: ['Popel'],
      },
      expeditionId: 'Expedition1',
      status: 'started',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(
      state,
      actions.finishBattle(battle, ['Jade'], ['DiamondCluster'])
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toMatchSnapshot()

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle FINISH_EXPEDITION', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      nextBranchId: '0t22iBGUff',
      type: 'battle',
      expeditionId: 'Expedition1',
      config: {
        tier: 2,
        newUBNCards: {
          type: 'regular',
          addRandom: true,
        },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      status: 'unlocked',
      tries: 0,
    } as types.Battle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(state, actions.finishExpedition(battle))

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toMatchSnapshot()

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB', () => {
    const result = Reducer(initialState, actions.fetchFromDB())

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(initialState)

    expect(cmd).toEqual(
      Cmd.run(getFromDb, {
        args: [EXPEDITIONS_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS without state', () => {
    const result = Reducer(
      initialState,
      // @ts-ignore disable-line
      actions.fetchFromDBSuccessful(undefined)
    )

    expect(getModel(result)).toEqual(initialState)
    expect(getCmd(result)).toEqual(null)
  })

  it('should handle FETCH_FROM_DB_SUCCESS with snapshot migration', () => {
    const state = {
      expeditions: {
        // @ts-ignore disable-line
        Expedition2: expedition2 as types.Expedition,
      },
      expeditionIds: ['Expedition2'],
    }

    const result = Reducer(initialState, actions.fetchFromDBSuccessful(state))

    expect(getModel(result)).toEqual(initialState)
    expect(getCmd(result)).toEqual(
      Cmd.run(migrate, {
        args: [
          Cmd.getState,
          {
            newState: state,
          },
        ],
        successActionCreator: actions.migrateToSettingsSnapshotSuccessful,
      })
    )
  })

  it('should handle SETTINGS_SNAPSHOT_MIGRATION_SUCCESS', () => {
    const state = {
      expeditions: {
        // @ts-ignore disable-line
        Expedition1: expedition2 as types.Expedition,
      },
      expeditionIds: ['Expedition2'],
    }

    const result = Reducer(
      initialState,
      actions.migrateToSettingsSnapshotSuccessful(state)
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(state)

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, state],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it.todo('should handle FETCH_FROM_DB_SUCCESS with invalid state')

  it('should handle FETCH_FROM_DB_FAILURE', () => {
    expect(Reducer(initialState, actions.fetchFromDBFailed({}))).toEqual(
      initialState
    )
  })

  it('should handle EXPEDITION_SHARE', () => {
    const result = Reducer(
      initialState,
      actions.shareExpedition(expedition1 as types.Expedition)
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(initialState)
    expect(cmd).toEqual(
      Cmd.run(sideEffects.shareExpedition, {
        args: [expedition1],
        successActionCreator: actions.shareExpeditionSuccess,
        failActionCreator: actions.shareExpeditionFailure,
      })
    )
  })

  it('should handle EXPEDITION_SHARE_SUCCESS', () => {
    expect(Reducer(initialState, actions.shareExpeditionSuccess())).toEqual(
      initialState
    )
  })

  it('should handle EXPEDITION_SHARE_FAILURE', () => {
    expect(Reducer(initialState, actions.shareExpeditionFailure())).toEqual(
      initialState
    )
  })
})
