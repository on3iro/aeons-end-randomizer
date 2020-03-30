import { createSelector } from 'reselect'

import { SelectedCardsStateSlice, SelectedCardsLookupStateSlice } from './types'

/////////
// ALL //
/////////

const getSelectedCardsState = (state: SelectedCardsStateSlice) =>
  state.Settings.Expansions.SelectedCards

const getSelectedCardsLookupObject = (state: SelectedCardsLookupStateSlice) =>
  state.Settings.Expansions.SelectedCards.cards

const getExpansionId = (_: unknown, id: string) => id
const getIdList = (_: unknown, props: { cardIds: string[] }) => props.cardIds

const getCardById = (
  state: SelectedCardsLookupStateSlice,
  props: { id: string }
) => state.Settings.Expansions.SelectedCards.cards[props.id]

const getCardIdsArray = createSelector(
  [getSelectedCardsState],
  state => state.cardIds
)

const getCardIdsByExpansionId = createSelector(
  [getSelectedCardsState, getCardIdsArray, getExpansionId],
  (state, cardIds, expansionId) =>
    cardIds.filter(cardId => state.cards[cardId].expansion === expansionId)
)

const getCardsByExpansionId = createSelector(
  [getSelectedCardsState, getCardIdsByExpansionId],
  (state, cardIds) => cardIds.map(cardId => state.cards[cardId])
)

const getGemsByExpansionId = createSelector([getCardsByExpansionId], cards =>
  cards.filter(card => card.type === 'Gem')
)

const getRelicsByExpansionId = createSelector([getCardsByExpansionId], cards =>
  cards.filter(card => card.type === 'Relic')
)

const getSpellsByExpansionId = createSelector([getCardsByExpansionId], cards =>
  cards.filter(card => card.type === 'Spell')
)

//////////////
// SELECTED //
//////////////

const getSelectedCardIds = createSelector([getSelectedCardsState], state =>
  state.cardIds.filter(id => state.cards[id].selected)
)

const getSelectedCards = createSelector(
  [getSelectedCardsState, getSelectedCardIds],
  (state, cardIds) => cardIds.map(cardId => state.cards[cardId])
)

const getCardsByIdList = createSelector(
  [getSelectedCardsLookupObject, getIdList],
  (cards, idList) => idList.map(id => cards[id])
)

export const selectors = {
  getSelectedCardsLookupObject,
  getSelectedCards,
  getGemsByExpansionId,
  getRelicsByExpansionId,
  getSpellsByExpansionId,
  getCardById,
  getCardsByIdList,
}
