import { createSelector } from 'reselect'

import {
  UpgradedBasicNemesisCardsStateSlice,
  UpgradedBasicNemesisCardIdsStateSlice,
} from './types'

/////////
// ALL //
/////////

const getUpgradedBasicNemesisCards = (
  state: UpgradedBasicNemesisCardsStateSlice
) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards.upgradedBasicNemesisCards

const getExpansionId = (_: unknown, id: string) => id

const getUpgradedBasicNemesisCardIds = (
  state: UpgradedBasicNemesisCardIdsStateSlice
) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards
    .upgradedBasicNemesisCardIds

const getUpgradedBasicNemesisCardIdsByExpansionId = createSelector(
  [
    getUpgradedBasicNemesisCards,
    getUpgradedBasicNemesisCardIds,
    getExpansionId,
  ],
  (upgradedBasicNemesisCards, upgradedBasicNemesisCardIds, expansionId) =>
    upgradedBasicNemesisCardIds.filter(
      upgradedBasicNemesisCardId =>
        upgradedBasicNemesisCards[upgradedBasicNemesisCardId].expansion ===
        expansionId
    )
)

const getUpgradedBasicNemesisCardsByExpansionId = createSelector(
  [getUpgradedBasicNemesisCards, getUpgradedBasicNemesisCardIdsByExpansionId],
  (upgradedBasicNemesisCards, upgradedBasicNemesisCardIds) =>
    upgradedBasicNemesisCardIds.map(
      upgradedBasicNemesisCardId =>
        upgradedBasicNemesisCards[upgradedBasicNemesisCardId]
    )
)

const getUpgradedBasicNemesisCardList = createSelector(
  [getUpgradedBasicNemesisCards, getUpgradedBasicNemesisCardIds],
  (cards, ids) => ids.map(id => cards[id])
)

//////////////
// SELECTED //
//////////////

const getSelectedUpgradedBasicNemesisCardIds = createSelector(
  [getUpgradedBasicNemesisCards, getUpgradedBasicNemesisCardIds],
  (upgradedBasicNemesisCards, ids) =>
    ids.filter(id => upgradedBasicNemesisCards[id].selected)
)

const getSelectedUpgradedBasicNemesisCards = createSelector(
  [getUpgradedBasicNemesisCards, getSelectedUpgradedBasicNemesisCardIds],
  (upgradedBasicNemesisCards, ids) =>
    ids.map(id => upgradedBasicNemesisCards[id])
)

export const selectors = {
  getUpgradedBasicNemesisCards,
  getUpgradedBasicNemesisCardIds,
  getUpgradedBasicNemesisCardIdsByExpansionId,
  getUpgradedBasicNemesisCardsByExpansionId,
  getUpgradedBasicNemesisCardList,
  getSelectedUpgradedBasicNemesisCards,
}
