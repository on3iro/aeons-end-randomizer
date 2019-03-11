import { set as setToDb } from 'idb-keyval'

import { ITurnOrderCard } from '../../../../config/types'
import { getRandomEntity } from '../../helpers'


export const TURNORDERSTATE = 'turnOrderState'

///////////
// Types //
///////////

type TurnOrderState = {
  deck: ITurnOrderCard[],
  discard: ITurnOrderCard[]
}

// Initializes the turn order state with a given state
type InitState = {
  type: 'INIT',
  payload: TurnOrderState
}

type DrawCard = {
  type: 'DRAW'
}

type NewRound = {
  type: 'NEW_ROUND',
  payload: ITurnOrderCard[]
}

type AddToTop = {
  type: 'ADD_TO_TOP',
  payload: string
}

type AddToBottom = {
  type: 'ADD_TO_BOTTOM',
  payload: string
}

type ShuffleIntoDeck = {
  type: 'SHUFFLE_INTO_DECK',
  payload: string
}

export type TurnOrderAction =
  DrawCard
  | NewRound
  | AddToTop
  | AddToBottom
  | ShuffleIntoDeck
  | InitState

/////////////
// helpers //
/////////////

export const isValidTurnOrderState = (state: TurnOrderState): state is TurnOrderState => {
  return (
    (<TurnOrderState>state) !== undefined &&
    (<TurnOrderState>state).deck !== undefined &&
    (<TurnOrderState>state).discard !== undefined
  )
}


type TurnOrderListReductionResult = {
  availableCards: ITurnOrderCard[],
  result: ITurnOrderCard[]
}

const createTurnOrderCardList = (
  availableCards: ITurnOrderCard[],
  slots: ITurnOrderCard[],
  getEntity: <T>(list: Array<T>) => T
): TurnOrderListReductionResult => {
  const result = slots.reduce(
    (
      acc: TurnOrderListReductionResult,
      slot: ITurnOrderCard,
      i: number
    ) => {
      // If no entity is left, simply return the actual empty slot
      const card = getEntity(acc.availableCards) || slot

      // Make sure each entity will only be added to the result list once
      const remainingCards = acc.availableCards.filter(
        entity => entity.id !== card.id
      )

      return {
        availableCards: remainingCards,
        result: [ ...acc.result, card ]
      }
    }, { availableCards, result: [] })

  return result
}

const shuffleDeck = (deck: ITurnOrderCard[]): ITurnOrderCard[] => {
  return createTurnOrderCardList(deck, deck, getRandomEntity).result
}

/////////////
// Reducer //
/////////////

const TurnOrderStateReducer = (state: TurnOrderState, action: TurnOrderAction) => {
  switch (action.type) {
    case 'INIT': {
      return action.payload
    }

    case 'DRAW': {
      const { deck } = state

      if(deck.length === 0) return state

      const cardDrawn = deck[deck.length - 1];

      const newState = {
        deck: deck.filter(card => card.id !== cardDrawn.id),
        discard: [cardDrawn, ...state.discard ]
      }

      setToDb(TURNORDERSTATE, newState)

      return newState
    }

    case 'NEW_ROUND': {
      const newState = {
        deck: shuffleDeck(action.payload),
        discard: []
      }

      setToDb(TURNORDERSTATE, newState)

      return newState
    }

    case 'ADD_TO_TOP': {
      const cardId = action.payload
      const cardToAdd = state
        .discard
        .find(card => card.id === cardId)

      if (!cardToAdd) return state

      const newState = {
        deck: [...state.deck, cardToAdd],
        discard: state
          .discard
          .filter(card => card.id !== cardId)
      }

      setToDb(TURNORDERSTATE, newState)

      return newState
    }

    case 'ADD_TO_BOTTOM': {
      const cardId = action.payload
      const cardToAdd = state
        .discard
        .find(card => card.id === cardId)

      if (!cardToAdd) return state

      const newState = {
        deck: [cardToAdd, ...state.deck],
        discard: state
          .discard
          .filter(card => card.id !== cardId)
      }

      setToDb(TURNORDERSTATE, newState)

      return newState
    }

    case 'SHUFFLE_INTO_DECK': {
      const cardId = action.payload
      const cardToShuffle = state
        .discard
        .find(card => card.id === cardId)

      if (!cardToShuffle) return state

      const newDeck = [...state.deck, cardToShuffle]
      const shuffledDeck = shuffleDeck(newDeck)

      const newState = {
        deck: shuffledDeck,
        discard: state
          .discard
          .filter(card => card.id !== cardId)
      }

      setToDb(TURNORDERSTATE, newState)

      return newState
    }

    default: {
      return state
    }
  }
}


export default TurnOrderStateReducer
