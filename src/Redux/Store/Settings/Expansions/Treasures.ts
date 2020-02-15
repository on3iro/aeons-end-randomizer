import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import * as types from 'types'
import config from 'config'

import { RootState } from 'Redux/Store'

const TREASURES_DB_KEY = 'treasures-1.8'

///////////
// STATE //
///////////

type SelectedTreasures = {
  [key: string]: types.Treasure & { selected: boolean }
}

export type State = Readonly<{
  treasures: SelectedTreasures
  treasureIds: string[]
}>

export const initialState: State = {
  treasures: config.NORMALIZEDDATA.treasureIds.reduce(
    (acc, id) => ({
      ...acc,
      [id]: {
        ...config.NORMALIZEDDATA.treasures[id],
        selected: true,
      },
    }),
    {}
  ),
  treasureIds: config.NORMALIZEDDATA.treasureIds,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_CARD = 'Settings/Expansions/Treasures/TOGGLE_CARD',
  SET_TO_DB = 'Settings/Expansions/Treasures/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/Treasures/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/Treasures/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/Treasures/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/Treasures/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/Treasures/FETCH_FROM_DB_FAILURE',
}

export const actions = {
  toggleCard: (id: string) => createAction(ActionTypes.TOGGLE_CARD, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (selectedCards: string[]) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, selectedCards),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
  noOp: () => createAction('NOOP'),
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
    case ActionTypes.TOGGLE_CARD: {
      const newState = {
        ...state,
        treasures: {
          ...state.treasures,
          [action.payload]: {
            ...state.treasures[action.payload],
            selected: !state.treasures[action.payload].selected,
          },
        },
      }

      const selectedCardsToSave = state.treasureIds.filter(
        id => newState.treasures[id].selected
      )

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [TREASURES_DB_KEY, selectedCardsToSave],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run(getFromDb, {
          args: [TREASURES_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      if (!action.payload) {
        return initialState
      }

      const selectedCards: string[] = action.payload
      const newState = Object.values(state.treasures).reduce(
        (acc, treasure) => ({
          ...acc,
          treasures: {
            ...acc.treasures,
            [treasure.id]: {
              ...treasure,
              selected: selectedCards.includes(treasure.id),
            },
          },
        }),
        state
      )

      return newState || initialState
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

// All

const getTreasures = (state: RootState) =>
  state.Settings.Expansions.Treasures.treasures

const getTreasureLevel = (
  _: RootState,
  props: { treasureLevel: types.TreasureLevel }
) => props.treasureLevel

const getExpansionId = (_: any, id: string) => id
const getIdList = (_: any, props: { treasureIds: string[] }) =>
  props.treasureIds

const getTreasureIds = (state: RootState) =>
  state.Settings.Expansions.Treasures.treasureIds

const getTreasureIdsByTreasureLevel = createSelector(
  [getTreasures, getTreasureIds, getTreasureLevel],
  (treasures, ids, level) =>
    ids
      .map(id => treasures[id])
      .filter(treasure => treasure.level === level)
      .map(treasure => treasure.id)
)

const getTreasureIdsByExpansionId = createSelector(
  [getTreasures, getTreasureIds, getExpansionId],
  (treasures, treasureIds, expansionId) =>
    treasureIds.filter(
      treasureId => treasures[treasureId].expansion === expansionId
    )
)

const getTreasuresByExpansionId = createSelector(
  [getTreasures, getTreasureIdsByExpansionId],
  (treasures, treasureIds) =>
    treasureIds.map(treasureId => treasures[treasureId])
)

const getTreasureList = createSelector(
  [getTreasures, getTreasureIds],
  (treasures, treasureIds) => treasureIds.map(id => treasures[id])
)

const getTreasureListByLevel = createSelector(
  [getTreasures, getTreasureIdsByTreasureLevel],
  (treasures, treasureIds) => treasureIds.map(id => treasures[id])
)

const getTreasureListFromIdList = createSelector(
  [getTreasures, getIdList],
  (treasures, ids) => ids.map(id => treasures[id])
)

// Selected

const getSelectedTreasureIds = createSelector(
  [getTreasures, getTreasureIds],
  (treasures, ids) => ids.filter(id => treasures[id].selected)
)

const getSelectedTreasures = createSelector(
  [getTreasures, getSelectedTreasureIds],
  (treasures, ids) => ids.map(id => treasures[id])
)

const getSelectedTreasureIdsByTreasureLevel = createSelector(
  [getTreasures, getSelectedTreasureIds, getTreasureLevel],
  (treasures, ids, level) =>
    ids
      .map(id => treasures[id])
      .filter(treasure => treasure.level === level)
      .map(treasure => treasure.id)
)

const getSelectedTreasureListByLevel = createSelector(
  [getTreasures, getSelectedTreasureIdsByTreasureLevel],
  (treasures, treasureIds) => treasureIds.map(id => treasures[id])
)

export const selectors = {
  getTreasures,
  getTreasureIds,
  getTreasureIdsByExpansionId,
  getTreasuresByExpansionId,
  getTreasureIdsByTreasureLevel,
  getTreasureList,
  getTreasureListByLevel,
  getTreasureListFromIdList,
  getSelectedTreasures,
  getSelectedTreasureIdsByTreasureLevel,
  getSelectedTreasureListByLevel,
}
