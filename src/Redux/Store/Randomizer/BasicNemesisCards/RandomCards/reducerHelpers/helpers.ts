import seedrandom from 'seedrandom'
import shortid from 'shortid'

import * as types from 'types'

import { PlayerCount } from '../../PlayerCount/types'

import {
  getRandomEntity,
  createSlotList,
  createBasicNemesisCardList,
} from 'Redux/helpers'

type CardMatrix = {
  [key: string]: {
    [key: number]: number
  }
}

export const cardMatrix: CardMatrix = {
  tier1: {
    1: 1,
    2: 3,
    3: 5,
    4: 8,
  },
  tier2: {
    1: 3,
    2: 5,
    3: 6,
    4: 7,
  },
  tier3: {
    1: 7,
    2: 7,
    3: 7,
    4: 7,
  },
}

export const getBasicNemesisCardsByTier = (
  cards: ReadonlyArray<types.BasicNemesisCard>,
  tier: types.NemesisCardTier
) => cards.filter(card => card.tier === tier)

export const getRandomMinionAmount = (
  count: number = 3,
  seed: types.Seed = {
    seed: shortid.generate(),
  }
) => {
  const rng = seedrandom(seed.seed)
  return Math.floor(rng() * Math.floor(count))
}

export const drawMinions = (
  cards: ReadonlyArray<types.BasicNemesisCard>,
  amount: number,
  seed?: types.Seed
) => {
  const minions = cards.filter(card => card.type === 'Minion')

  return createBasicNemesisCardList(
    minions,
    createSlotList(amount),
    getRandomEntity,
    seed
  ).result
}

export const drawPowersAndAttacks = (
  cards: ReadonlyArray<types.BasicNemesisCard>,
  amount: number,
  seed?: types.Seed
) => {
  const powersAndAttacks = cards.filter(card => card.type !== 'Minion')

  return createBasicNemesisCardList(
    powersAndAttacks,
    createSlotList(amount),
    getRandomEntity,
    seed
  ).result
}

export const getRandomBasicNemesisCardsByTier = (
  cards: ReadonlyArray<types.BasicNemesisCard>,
  tier: types.NemesisCardTier,
  playerCount: PlayerCount,
  seed?: types.Seed
) => {
  // Get cards by tier
  const cardsByTier = getBasicNemesisCardsByTier(cards, tier)

  // Get amount of minions per player
  const minionAmount =
    playerCount === 1
      ? getRandomMinionAmount(2, seed)
      : getRandomMinionAmount(3, seed)

  // Draw up to max amount of minions from minions
  const randomMinions = drawMinions(cardsByTier, minionAmount, seed)

  // Draw tierCount - minionCount cards from power/attack pool
  const randomPowersAndAttacks = drawPowersAndAttacks(
    cardsByTier,
    cardMatrix[`tier${tier}`][playerCount] - randomMinions.length,
    seed
  )

  return [...randomMinions, ...randomPowersAndAttacks]
}

export const getRandomBasicNemesisCardList = (
  cards: ReadonlyArray<types.BasicNemesisCard>,
  playerCount: PlayerCount,
  seed?: types.Seed
) => {
  return {
    Tier1: getRandomBasicNemesisCardsByTier(cards, 1, playerCount, seed),
    Tier2: getRandomBasicNemesisCardsByTier(cards, 2, playerCount, seed),
    Tier3: getRandomBasicNemesisCardsByTier(cards, 3, playerCount, seed),
  }
}
