import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb, get as getFromDb } from 'idb-keyval'

import * as types from 'types'
import { Reducer, initialState } from '../reducer'
import { actions } from '../actions'
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
      Cmd.run(sideEffects.createExpeditionConfig, {
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
      Cmd.run(setToDb, {
        args: [EXPEDITIONS_DB_KEY, model],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
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
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.OldStyleBattle

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
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'Expedition1',
      status: 'before_battle',
      tries: 0,
      nemesisId: 'Arachnos',
    } as types.OldStyleBattle

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

    const battleIndex = expedition1.battles.findIndex(
      oldBattle => oldBattle.id === battle.id
    )
    const updatedBattles = Object.assign([...expedition1.battles], {
      [battleIndex]: battle,
    })

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
          battles: updatedBattles,
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
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.OldStyleBattle

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
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.OldStyleBattle

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
      Cmd.run(sideEffects.rollWinRewards, {
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
          nemesisTier: {
            tier: 2,
            isNewTier: true,
          },
          treasure: {
            level: 2,
            hasTreasure: true,
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
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.OldStyleBattle

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
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.OldStyleBattle

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
      Cmd.run(sideEffects.rollLossRewards, {
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
        nemesisTier: {
          tier: 2,
          isNewTier: true,
        },
        treasure: {
          level: 2,
          hasTreasure: true,
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
      rewards: {
        mage: 'Adelheim',
        treasure: ['AlchemistsAlembic'],
        supplyIds: [],
      },
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.OldStyleBattle

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
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'Expedition1',
      status: 'unlocked',
      tries: 0,
    } as types.OldStyleBattle

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

  it('should handle FINISH_BATTLE', () => {
    const battle = {
      id: 'YBsJLx4PfV',
      rewards: {
        treasure: ['AlchemistsAlembic'],
        supplyIds: ['Popel'],
      },
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'Expedition1',
      status: 'started',
      tries: 0,
    } as types.OldStyleBattle

    const state = {
      expeditions: {
        Expedition1: expedition1 as types.Expedition,
      },
      expeditionIds: ['Expedition1'],
    }

    const result = Reducer(
      state,
      actions.finishBattle(battle, ['DiamondCluster'], ['Jade'])
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
      battleConfig: {
        tier: 2,
        newUBNCards: {
          ids: [],
          addRandom: true,
        },
        treasure: {
          level: 2,
          hasTreasure: true,
        },
      },
      status: 'unlocked',
      tries: 0,
    } as types.Branch

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

    expect(getModel(result)).toEqual(state)
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
