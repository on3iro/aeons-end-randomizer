import { createSelector } from 'reselect'

import * as types from 'types'

import {
  BasicNemesisCardsStateSlice,
  BasicNemesisCardIdsStateSlice,
} from './types'

/////////
// ALL //
/////////

const getBasicNemesisCards = (state: BasicNemesisCardsStateSlice) =>
  state.Settings.Expansions.BasicNemesisCards.basicNemesisCards

const getBasicNemesisCardTier = (
  _: unknown,
  props: { tier: types.NemesisCardTier }
) => props.tier

const getExpansionId = (_: unknown, id: string) => id

const getBasicNemesisCardIds = (state: BasicNemesisCardIdsStateSlice) =>
  state.Settings.Expansions.BasicNemesisCards.basicNemesisCardIds

const getBasicNemesisCardById = (
  state: BasicNemesisCardsStateSlice,
  props: { id: string }
) => state.Settings.Expansions.BasicNemesisCards.basicNemesisCards[props.id]

const getBasicNemesisCardIdsByTier = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIds, getBasicNemesisCardTier],
  (basicNemesisCards, ids, tier) =>
    ids
      .map(id => basicNemesisCards[id])
      .filter(basicNemesisCard => basicNemesisCard.tier === tier)
      .map(basicNemesisCard => basicNemesisCard.id)
)

const getBasicNemesisCardIdsByExpansionId = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIds, getExpansionId],
  (basicNemesisCards, basicNemesisCardIds, expansionId) =>
    basicNemesisCardIds.filter(
      basicNemesisCardId =>
        basicNemesisCards[basicNemesisCardId].expansion === expansionId
    )
)

const getBasicNemesisCardsByExpansionId = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIdsByExpansionId],
  (basicNemesisCards, basicNemesisCardIds) =>
    basicNemesisCardIds.map(
      basicNemesisCardId => basicNemesisCards[basicNemesisCardId]
    )
)

const getBasicNemesisCardList = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIds],
  (basicNemesisCards, ids) => ids.map(id => basicNemesisCards[id])
)

const getBasicNemesisCardListByTier = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIdsByTier],
  (basicNemesisCards, ids) => ids.map(id => basicNemesisCards[id])
)

//////////////
// SELECTED //
//////////////

const getSelectedBasicNemesisCardIds = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIds],
  (basicNemesisCards, ids) => ids.filter(id => basicNemesisCards[id].selected)
)

const getSelectedBasicNemesisCards = createSelector(
  [getBasicNemesisCards, getSelectedBasicNemesisCardIds],
  (basicNemesisCards, ids) => ids.map(id => basicNemesisCards[id])
)

const getSelectedBasicNemesisCardIdsByTier = createSelector(
  [
    getBasicNemesisCards,
    getSelectedBasicNemesisCardIds,
    getBasicNemesisCardTier,
  ],
  (basicNemesisCards, ids, tier) =>
    ids
      .map(id => basicNemesisCards[id])
      .filter(basicNemesisCard => basicNemesisCard.tier === tier)
      .map(basicNemesisCard => basicNemesisCard.id)
)

const getSelectedBasicNemesisCardListByTier = createSelector(
  [getBasicNemesisCards, getSelectedBasicNemesisCardIdsByTier],
  (basicNemesisCards, ids) => ids.map(id => basicNemesisCards[id])
)

export const selectors = {
  getBasicNemesisCards,
  getBasicNemesisCardIds,
  getBasicNemesisCardIdsByExpansionId,
  getBasicNemesisCardsByExpansionId,
  getBasicNemesisCardIdsByTier,
  getBasicNemesisCardListByTier,
  getBasicNemesisCardById,
  getBasicNemesisCardList,
  getSelectedBasicNemesisCards,
  getSelectedBasicNemesisCardIdsByTier,
  getSelectedBasicNemesisCardListByTier,
}
