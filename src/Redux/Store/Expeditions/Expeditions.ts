import { createSelector } from 'reselect'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import { RootState } from '../'
import * as types from '../../../types'
import {
  BaseConfig,
  LossConfig,
  RollBattleConfig,
  WinConfig,
  calcBattleScore,
  createBattle,
  createExpeditionConfig,
  rollLossRewards,
  rollWinRewards,
} from './helpers'

const EXPEDITIONS_DB_KEY = 'expeditions-1.11.0'

///////////
// STATE //
///////////

export type State = {
  expeditions: types.Expeditions
  expeditionIds: string[]
}

export const initialState: State = {
  expeditions: {},
  expeditionIds: [],
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  CREATE_EXPEDITION = 'Expeditions/Expeditions/CREATE_EXPEDITION',
  DELETE_EXPEDITION = 'Expeditions/Expeditions/DELETE_EXPEDITION',
  ROLL_BATTLE = 'Expeditions/Expeditions/ROLL_BATTLE',
  START_BATTLE = 'Expeditions/Expeditions/START_BATTLE',
  WIN_BATTLE = 'Expeditions/Expeditions/WIN_BATTLE',
  LOSE_BATTLE = 'Expeditions/Expeditions/LOSE_BATTLE',
  ROLL_LOSS = 'Expeditions/Expeditions/ROLL_LOSS',
  ACCEPT_LOSS = 'Expeditions/Expeditions/ACCEPT_LOSS',
  FINISH_BATTLE = 'Expeditions/Expeditions/FINISH_BATTLE',
  FINISH_EXPEDITION = 'Expeditions/Expeditions/FINISH_EXPEDITION',
  SET_TO_DB = 'Expeditions/Expeditions/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Expeditions/Expeditions/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Expeditions/Expeditions/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Expeditions/Expeditions/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Expeditions/Expeditions/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Expeditions/Expeditions/FETCH_FROM_DB_FAILURE',
}

const createExpeditionAction = (baseConfig: BaseConfig) =>
  createAction(
    ActionTypes.CREATE_EXPEDITION,
    createExpeditionConfig(baseConfig)
  )

export const actions = {
  createExpedition: createExpeditionAction,
  rollBattle: (config: RollBattleConfig) =>
    createAction(ActionTypes.ROLL_BATTLE, createBattle(config)),
  startBattle: (battle: types.Battle) =>
    createAction(ActionTypes.START_BATTLE, { battle }),
  winBattle: (config: WinConfig) =>
    createAction(ActionTypes.WIN_BATTLE, rollWinRewards(config)),
  loseBattle: (battle: types.Battle) =>
    createAction(ActionTypes.LOSE_BATTLE, { battle }),
  acceptLoss: (
    battle: types.Battle,
    banished: string[],
    newSupplyIds: string[]
  ) =>
    createAction(ActionTypes.ACCEPT_LOSS, { battle, banished, newSupplyIds }),
  rollLoss: (config: LossConfig) =>
    createAction(ActionTypes.ROLL_LOSS, rollLossRewards(config)),
  finishBattle: (
    battle: types.Battle,
    newSupplyIds: string[],
    banished: string[]
  ) =>
    createAction(ActionTypes.FINISH_BATTLE, { battle, newSupplyIds, banished }),
  finishExpedition: (battle: types.Battle) =>
    createAction(ActionTypes.FINISH_EXPEDITION, { battle }),
  deleteExpedition: (id: string) =>
    createAction(ActionTypes.DELETE_EXPEDITION, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: State) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}

export type Action = ActionsUnion<typeof actions>

/////////////
// REDUCER //
/////////////

const updateBattle = (
  state: State,
  battle: types.Battle,
  additionalBattleProps?: {
    status?: types.BattleStatus
    tries?: number
    rewards?: null
  }
) => {
  const oldExpedition = state.expeditions[battle.expeditionId]
  const oldBattleList = oldExpedition.battles

  const battleIndex = oldBattleList.findIndex(
    oldBattle => oldBattle.id === battle.id
  )

  const updatedBattles = Object.assign([...oldBattleList], {
    [battleIndex]: {
      ...battle,
      ...additionalBattleProps,
    },
  })

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [battle.expeditionId]: {
        ...oldExpedition,
        battles: updatedBattles,
      },
    },
  }

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [EXPEDITIONS_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.CREATE_EXPEDITION: {
      const {
        battles,
        bigPocketVariant,
        expeditionId,
        mageIds,
        name,
        supplyIds,
        treasureIds,
        variantId,
      } = action.payload

      const newState = {
        ...state,
        expeditions: {
          ...state.expeditions,
          [expeditionId]: {
            id: expeditionId,
            name: name,
            score: 0,
            barracks: {
              mageIds,
              supplyIds,
              treasureIds,
            },
            upgradedBasicNemesisCards: [],
            banished: [],
            variantId,
            bigPocketVariant: bigPocketVariant,
            battles,
            finished: false,
          },
        },
        expeditionIds: [expeditionId, ...state.expeditionIds],
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [EXPEDITIONS_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.DELETE_EXPEDITION: {
      const id = action.payload

      const { [id]: expedition, ...rest } = state.expeditions

      const newState = {
        expeditions: { ...rest },
        expeditionIds: state.expeditionIds.filter(
          expeditionId => expeditionId !== id
        ),
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [EXPEDITIONS_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.ROLL_BATTLE: {
      const { battle, upgradedBasicNemesisCardIds } = action.payload

      const oldExpedition = state.expeditions[battle.expeditionId]
      const oldBattleList = oldExpedition.battles

      const battleIndex = oldBattleList.findIndex(
        oldBattle => oldBattle.id === battle.id
      )
      const updatedBattles = Object.assign([...oldBattleList], {
        [battleIndex]: battle,
      })

      const newState = {
        ...state,
        expeditions: {
          ...state.expeditions,
          [battle.expeditionId]: {
            ...oldExpedition,
            upgradedBasicNemesisCards: upgradedBasicNemesisCardIds,
            battles: updatedBattles,
          },
        },
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [EXPEDITIONS_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.START_BATTLE: {
      const { battle } = action.payload
      return updateBattle(state, battle, {
        tries: battle.tries + 1,
        status: 'started',
      })
    }

    case ActionTypes.WIN_BATTLE: {
      const { battle } = action.payload
      const oldExpedition = state.expeditions[battle.expeditionId]
      const oldBattleList = oldExpedition.battles

      const battleIndex = oldBattleList.findIndex(
        oldBattle => oldBattle.id === battle.id
      )

      const updatedBattles = Object.assign([...oldBattleList], {
        [battleIndex]: {
          ...battle,
          status: 'won',
        },
      })

      const battleScore = calcBattleScore(battle.tries)

      const newState = {
        ...state,
        expeditions: {
          ...state.expeditions,
          [battle.expeditionId]: {
            ...oldExpedition,
            score: oldExpedition.score + battleScore,
            battles: updatedBattles,
          },
        },
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [EXPEDITIONS_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.LOSE_BATTLE: {
      const { battle } = action.payload
      return updateBattle(state, battle, { status: 'lost' })
    }

    case ActionTypes.ROLL_LOSS: {
      const battle = action.payload

      return updateBattle(state, battle)
    }

    case ActionTypes.ACCEPT_LOSS: {
      const { battle, banished, newSupplyIds } = action.payload

      const oldExpedition = state.expeditions[battle.expeditionId]
      const oldBattleList = oldExpedition.battles

      const battleIndex = oldBattleList.findIndex(
        oldBattle => oldBattle.id === battle.id
      )

      const updatedBattles = Object.assign([...oldBattleList], {
        [battleIndex]: {
          ...battle,
          status: 'before_battle',
          rewards: undefined,
        },
      })

      const newTreasureIds = battle.rewards ? battle.rewards.treasure : []
      const newMageIds =
        battle.rewards && battle.rewards.mage ? [battle.rewards.mage] : []

      const newState = {
        ...state,
        expeditions: {
          ...state.expeditions,
          [battle.expeditionId]: {
            ...oldExpedition,
            battles: updatedBattles,
            barracks: {
              ...oldExpedition.barracks,
              treasureIds: [
                ...oldExpedition.barracks.treasureIds,
                ...newTreasureIds,
              ],
              supplyIds: newSupplyIds,
              mageIds: [...oldExpedition.barracks.mageIds, ...newMageIds],
            },
            banished: [...oldExpedition.banished, ...banished],
          },
        },
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [EXPEDITIONS_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FINISH_BATTLE: {
      const { battle, newSupplyIds, banished } = action.payload
      const oldExpedition = state.expeditions[battle.expeditionId]
      const oldBattleList = oldExpedition.battles

      const battleIndex = oldBattleList.findIndex(
        oldBattle => oldBattle.id === battle.id
      )

      const indexOfNextBattle = battleIndex + 1
      const hasNext = indexOfNextBattle < oldBattleList.length

      const updatedBattles = Object.assign([...oldBattleList], {
        [battleIndex]: {
          ...battle,
          status: 'finished',
        },
        ...(hasNext && {
          [indexOfNextBattle]: {
            ...oldBattleList[indexOfNextBattle],
            status: 'unlocked',
          },
        }),
      })

      const newTreasureIds = battle.rewards ? battle.rewards.treasure : []

      const newState = {
        ...state,
        expeditions: {
          ...state.expeditions,
          [battle.expeditionId]: {
            ...oldExpedition,
            battles: updatedBattles,
            barracks: {
              ...oldExpedition.barracks,
              treasureIds: [
                ...oldExpedition.barracks.treasureIds,
                ...newTreasureIds,
              ],
              supplyIds: newSupplyIds,
            },
            banished: [...oldExpedition.banished, ...banished],
          },
        },
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [EXPEDITIONS_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FINISH_EXPEDITION: {
      const { battle } = action.payload
      const oldExpedition = state.expeditions[battle.expeditionId]
      const oldBattleList = oldExpedition.battles

      const battleIndex = oldBattleList.findIndex(
        oldBattle => oldBattle.id === battle.id
      )

      const updatedBattles = Object.assign([...oldBattleList], {
        [battleIndex]: {
          ...battle,
          status: 'finished',
        },
      })

      const battleScore = calcBattleScore(battle.tries)

      const newState = {
        ...state,
        expeditions: {
          ...state.expeditions,
          [battle.expeditionId]: {
            ...oldExpedition,
            score: oldExpedition.score + battleScore,
            battles: updatedBattles,
            finished: true,
          },
        },
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [EXPEDITIONS_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run(getFromDb, {
          args: [EXPEDITIONS_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      return action.payload || state
    }

    case ActionTypes.FETCH_FROM_DB_FAILURE: {
      return state
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getExpeditions = (state: RootState) =>
  state.Expeditions.Expeditions.expeditions
const getExpeditionIds = (state: RootState) =>
  state.Expeditions.Expeditions.expeditionIds
const getExpeditionId = (_: RootState, props: { expeditionId: string }) =>
  props.expeditionId
const getBattleId = (_: RootState, props: { battleId: string }) =>
  props.battleId

const getExpeditionList = createSelector(
  [getExpeditionIds, getExpeditions],
  (ids, expeditions) => ids.map(id => expeditions[id])
)

const getExpeditionById = createSelector(
  [getExpeditions, getExpeditionId],
  (expeditions, id) => expeditions[id]
)

const getExpeditionIsFinished = createSelector(
  [getExpeditionById],
  expedition => expedition.finished
)

const getHasNextBattle = createSelector(
  [getExpeditionById, getBattleId],
  (expedition, battleId) => {
    const currentBattleIndex = expedition.battles.findIndex(
      battle => battle.id === battleId
    )

    return currentBattleIndex + 1 < expedition.battles.length
  }
)

const getNextBattle = createSelector(
  [getExpeditionById, getBattleId],
  (expedition, battleId) => {
    const currentBattleIndex = expedition.battles.findIndex(
      battle => battle.id === battleId
    )
    const hasNext = currentBattleIndex < expedition.battles.length

    if (hasNext) {
      return expedition.battles[currentBattleIndex + 1]
    }

    return null
  }
)

const getSupplyByExpeditionId = createSelector(
  [getExpeditionById],
  expedition => expedition.barracks.supplyIds
)

const getMagesByExpeditionId = createSelector(
  [getExpeditionById],
  expedition => expedition.barracks.mageIds
)

export const selectors = {
  getExpeditions,
  getExpeditionIds,
  getExpeditionList,
  getExpeditionById,
  getNextBattle,
  getSupplyByExpeditionId,
  getMagesByExpeditionId,
  getExpeditionIsFinished,
  getHasNextBattle,
}
