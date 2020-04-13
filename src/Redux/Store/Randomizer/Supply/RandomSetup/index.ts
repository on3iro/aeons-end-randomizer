import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import * as types from 'aer-types'
import { byCost } from 'helpers'

import { createSupply } from 'Redux/helpers'

///////////
// STATE //
///////////

type Tiles = ReadonlyArray<Readonly<{ id: string }>> | null

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

export const actions = {
  noOp: () => createAction('NOOP'),
  resetMarket: () => createAction(ActionTypes.RESET),
  createMarket: (
    availableCards: ReadonlyArray<types.ICard>,
    tiles: ReadonlyArray<types.Slot>,
    seed?: types.Seed
  ) => {
    const { gems, relics, spells } = createSupply(availableCards, tiles, seed)
    const gemsByCost = gems.sort(byCost).map(gem => {
      return {
        id: gem.id,
      }
    })

    const relicsByCost = relics.sort(byCost).map(relic => {
      return {
        id: relic.id,
      }
    })

    const spellsByCost = spells.sort(byCost).map(spell => {
      return {
        id: spell.id,
      }
    })

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
