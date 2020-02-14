import { loop, Cmd } from 'redux-loop'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import { calcBattleScore } from './helpers'

import * as types from 'types'
import { State, Action } from './types'
import { actions } from './actions'

const EXPEDITIONS_DB_KEY = 'expeditions-1.11.0'

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

export const createExpedition = (
  state: State,
  action: ReturnType<typeof actions.createExpedition>
) => {
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

export const deleteExpedition = (
  state: State,
  action: ReturnType<typeof actions.deleteExpedition>
) => {
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

export const rollBattle = (
  state: State,
  action: ReturnType<typeof actions.rollBattle>
) => {
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

export const startBattle = (
  state: State,
  action: ReturnType<typeof actions.startBattle>
) => {
  const { battle } = action.payload
  return updateBattle(state, battle, {
    tries: battle.tries + 1,
    status: 'started',
  })
}

export const winBattle = (
  state: State,
  action: ReturnType<typeof actions.winBattle>
) => {
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

export const loseBattle = (
  state: State,
  action: ReturnType<typeof actions.loseBattle>
) => {
  const { battle } = action.payload
  return updateBattle(state, battle, { status: 'lost' })
}

export const rollLoss = (
  state: State,
  action: ReturnType<typeof actions.rollLoss>
) => {
  const battle = action.payload

  return updateBattle(state, battle)
}

export const acceptLoss = (
  state: State,
  action: ReturnType<typeof actions.acceptLoss>
) => {
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

export const finishBattle = (
  state: State,
  action: ReturnType<typeof actions.finishBattle>
) => {
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

export const finishExpedition = (
  state: State,
  action: ReturnType<typeof actions.finishExpedition>
) => {
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

export const fetchFromDB = (state: State, _: Action) => {
  return loop(
    state,
    Cmd.run(getFromDb, {
      args: [EXPEDITIONS_DB_KEY],
      successActionCreator: actions.fetchFromDBSuccessful,
      failActionCreator: actions.fetchFromDBFailed,
    })
  )
}
