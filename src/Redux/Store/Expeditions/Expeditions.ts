import { createSelector } from 'reselect'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { get as getFromDb, set as setToDb } from 'idb-keyval'
import shortid from 'shortid'

import { RootState } from '../'
import * as types from '../../../types'
import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
  createSupply,
  byCost,
} from '../../helpers'

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
  CREATE_EXPEDITION = 'Expeditions/Expeditions/CREATE_EXPEDITIONS',
  SET_TO_DB = 'Expeditions/Expeditions/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Expeditions/Expeditions/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Expeditions/Expeditions/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Expeditions/Expeditions/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Expeditions/Expeditions/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Expeditions/Expeditions/FETCH_FROM_DB_FAILURE',
}

const createExpeditionAction = ({
  modeId,
  name,
  bigPocketMode,
  availableMageIds,
  availableCards,
  tiles,
}: {
  modeId: types.ModeId
  name: string
  bigPocketMode: boolean
  availableMageIds: string[]
  availableCards: types.ICard[]
  tiles: types.Slot[]
}) => {
  const mageIds = createIdList(
    availableMageIds,
    createArrayWithDefaultValues(4, 'EMPTY'),
    getRandomEntity
  ).result
  const { gems, relics, spells } = createSupply(availableCards, tiles)
  const gemsByCost = gems.result.sort(byCost)
  const relicsByCost = relics.result.sort(byCost)
  const spellsByCost = spells.result.sort(byCost)

  const supplyIds = [...gemsByCost, ...relicsByCost, ...spellsByCost].map(
    card => card.id
  )

  const config = {
    modeId,
    name,
    bigPocketMode,
    mageIds,
    supplyIds,
    expeditionId: shortid.generate(),
  }

  return createAction(ActionTypes.CREATE_EXPEDITION, config)
}

export const actions = {
  createExpedition: createExpeditionAction,
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

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.CREATE_EXPEDITION: {
      const {
        modeId,
        name,
        bigPocketMode,
        expeditionId,
        mageIds,
        supplyIds,
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
              treasureIds: [],
            },
            upgradedBasicNemesisCards: [],
            banished: [],
            modeId,
            bigPocketMode: bigPocketMode,
            battles: [],
          },
        },
        expeditionIds: [...state.expeditionIds, expeditionId],
      }

      return loop(
        newState,
        Cmd.run<Action>(setToDb, {
          args: [EXPEDITIONS_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run<Action>(getFromDb, {
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
const getExpeditionId = (_: RootState, id: string) => id

const getExpeditionList = createSelector(
  [getExpeditionIds, getExpeditions],
  (ids, expeditions) => ids.map(id => expeditions[id])
)

const getExpeditionById = createSelector(
  [getExpeditions, getExpeditionId],
  (expeditions, id) => expeditions[id]
)

export const selectors = {
  getExpeditions,
  getExpeditionIds,
  getExpeditionList,
  getExpeditionById,
}
