import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import * as types from 'aer-types/types'
import { byCost } from 'helpers'

import { createSupply } from 'Redux/helpers'
import { LockedCard } from '../LockedCards'

///////////
// STATE //
///////////

type Tiles = ReadonlyArray<
  Readonly<{ id: string; blueprintId: string | number }>
> | null

export type State = Readonly<{
  Tiles: Tiles
}>

export const initialState: State = {
  Tiles: null,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  RESET = 'Supply/RandomSetup/RESET',
  CREATE = 'Supply/RandomSetup/CREATE',
}

const sortEntitiesByCost = (entities: Array<LockedCard>) =>
  entities.sort(byCost).map((entity) => {
    return {
      id: entity.id,
      blueprintId: entity.blueprintId || 0, // FIXME we should probably rather fix this in aer-data and aer-types/types
      type: entity.type,
    }
  })

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  resetMarket: () => createAction(ActionTypes.RESET),
  createMarket: (
    availableCards: ReadonlyArray<types.ICard>,
    tiles: ReadonlyArray<types.Slot>,
    lockedCards: ReadonlyArray<LockedCard>,
    seed?: types.Seed
  ) => {
    const tilesFilteredByLocked = tiles.filter(
      (tile) =>
        lockedCards.findIndex((card) => card.blueprintId === tile.id) === -1
    )

    const lockedGems = lockedCards.filter(
      (lockedCard) => lockedCard.type === 'Gem'
    )
    const lockedRelics = lockedCards.filter(
      (lockedCard) => lockedCard.type === 'Relic'
    )
    const lockedSpells = lockedCards.filter(
      (lockedCard) => lockedCard.type === 'Spell'
    )

    const {
      gems: newGems,
      relics: newRelics,
      spells: newSpells,
    } = createSupply(availableCards, tilesFilteredByLocked, seed)

    const gems = [...lockedGems, ...newGems]
    const relics = [...lockedRelics, ...newRelics]
    const spells = [...lockedSpells, ...newSpells]

    const gemsByCost = sortEntitiesByCost(gems)
    const relicsByCost = sortEntitiesByCost(relics)
    const spellsByCost = sortEntitiesByCost(spells)

    return createAction(ActionTypes.CREATE, {
      supply: [...gemsByCost, ...relicsByCost, ...spellsByCost],
    })
  },
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
    case ActionTypes.RESET: {
      return initialState
    }

    case ActionTypes.CREATE: {
      const { supply } = action.payload

      return {
        ...state,
        Tiles: supply,
      }
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

export type RandomSetupTilesStateSlice = {
  Randomizer: {
    Supply: {
      RandomSetup: {
        Tiles: Tiles
      }
    }
  }
}

const getTiles = (state: RandomSetupTilesStateSlice) =>
  state.Randomizer.Supply.RandomSetup.Tiles

export const selectors = {
  getTiles,
}
