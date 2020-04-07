import { createSelector } from 'reselect'

import * as Settings from './Settings'
import * as Expeditions from './Expeditions'

export const getUpgradedBasicNemesisCardsByExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards
      .getUpgradedBasicNemesisCards,
  ],
  (expedition, upgradedBasicNemsisCards) =>
    expedition.upgradedBasicNemesisCards.map(
      (cardId) => upgradedBasicNemsisCards[cardId]
    )
)

export const getExpeditionSupply = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.SelectedCards.getSelectedCardsLookupObject,
  ],
  (expedition, supplyCards) =>
    expedition.barracks.supplyIds.map((id) => supplyCards[id])
)

export const getExpeditionMages = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.SelectedMages.getSelectedMagesLookupObject,
  ],
  (expedition, mages) => expedition.barracks.mageIds.map((id) => mages[id])
)

export const getExpeditionTreasure = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Treasures.getTreasures,
  ],
  (expedition, treasures) =>
    expedition.barracks.treasureIds.map((id) => treasures[id])
)

export const getExpeditionUpgradedBasicNemesis = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards
      .getUpgradedBasicNemesisCards,
  ],
  (expedition, upgradedBasicNemsisCards) =>
    expedition.upgradedBasicNemesisCards.map(
      (id) => upgradedBasicNemsisCards[id]
    )
)

export const getExpeditionBanishedCards = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.SelectedCards.getSelectedCardsLookupObject,
  ],
  (expedition, cards) => expedition.banished.map((id) => cards[id])
)

export const getAvailableNemesisForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.SelectedNemeses
      .getSelectedNemesesLookupObject,
  ],
  (settingsSnapshot, nemeses) =>
    settingsSnapshot.availableNemesisIds.map((id) => nemeses[id])
)

export const getAvailableCardsForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.SelectedCards.getSelectedCardsLookupObject,
  ],
  (settingsSnapshot, allCards) =>
    settingsSnapshot.availableCardIds.map((id) => allCards[id])
)

export const getAvailableMagesForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.SelectedMages.getSelectedMagesLookupObject,
  ],
  (settingsSnapshot, allMages) =>
    settingsSnapshot.availableMageIds.map((id) => allMages[id])
)

export const getAvailableTreasureForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.Treasures.getTreasures,
  ],
  (settingsSnapshot, treasures) =>
    settingsSnapshot.availableTreasureIds.map((id) => treasures[id])
)

export const getAvailableUpgradedBasicNemesisCardsForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards
      .getUpgradedBasicNemesisCards,
  ],
  (settingsSnapshot, UBNCards) =>
    settingsSnapshot.availableUpgradedBasicNemesisCardIds.map(
      (id) => UBNCards[id]
    )
)

export const getStillAvailableGemIds = createSelector(
  [
    getAvailableCardsForExpeditionId,
    Expeditions.selectors.Expeditions.getSupplyByExpeditionId,
    Expeditions.selectors.Expeditions.getBanishedByExpeditionId,
  ],
  (availableCards, expeditionSupplyIds, banishedIds) =>
    availableCards
      .filter((card) => card.type === 'Gem')
      .map((card) => card.id)
      .filter((id) => ![...expeditionSupplyIds, ...banishedIds].includes(id))
)

export const getStillAvailableGems = createSelector(
  [
    Settings.selectors.Expansions.SelectedCards.getSelectedCardsLookupObject,
    getStillAvailableGemIds,
  ],
  (cards, stillAvailableGemIds) => stillAvailableGemIds.map((id) => cards[id])
)

export const getStillAvailableRelicIds = createSelector(
  [
    getAvailableCardsForExpeditionId,
    Expeditions.selectors.Expeditions.getSupplyByExpeditionId,
    Expeditions.selectors.Expeditions.getBanishedByExpeditionId,
  ],
  (availableCards, expeditionSupplyIds, banishedIds) =>
    availableCards
      .filter((card) => card.type === 'Relic')
      .map((card) => card.id)
      .filter((id) => ![...expeditionSupplyIds, ...banishedIds].includes(id))
)

export const getStillAvailableRelics = createSelector(
  [
    Settings.selectors.Expansions.SelectedCards.getSelectedCardsLookupObject,
    getStillAvailableRelicIds,
  ],
  (cards, stillAvailableRelicIds) =>
    stillAvailableRelicIds.map((id) => cards[id])
)

export const getStillAvailableSpellIds = createSelector(
  [
    getAvailableCardsForExpeditionId,
    Expeditions.selectors.Expeditions.getSupplyByExpeditionId,
    Expeditions.selectors.Expeditions.getBanishedByExpeditionId,
  ],
  (availableCards, expeditionSupplyIds, banishedIds) =>
    availableCards
      .filter((card) => card.type === 'Spell')
      .map((card) => card.id)
      .filter((id) => ![...expeditionSupplyIds, ...banishedIds].includes(id))
)

export const getStillAvailableSpells = createSelector(
  [
    Settings.selectors.Expansions.SelectedCards.getSelectedCardsLookupObject,
    getStillAvailableSpellIds,
  ],
  (cards, stillAvailableSpellIds) =>
    stillAvailableSpellIds.map((id) => cards[id])
)

export const getStillAvailableMageIds = createSelector(
  [
    getAvailableMagesForExpeditionId,
    Expeditions.selectors.Expeditions.getMagesByExpeditionId,
  ],
  (availableMages, expeditionMageIds) =>
    availableMages
      .map((mage) => mage.id)
      .filter((id) => !expeditionMageIds.includes(id))
)

// Inversion of control -> this is so that we can compose a selector with
// the result of a consuming one. This selector returns a callback, which can
// in turn be used inside the consuming selector.
// We will denote such a callback with a '$' prefix for the consuming parameter
const getCallbackForAllTreasuresByLevelFromIdList = createSelector(
  [Settings.selectors.Expansions.Treasures.getTreasureIdsByTreasureLevel],
  (tByLevel) => (treasureIds: string[]) => {
    return treasureIds.filter((id) => tByLevel.includes(id))
  }
)

export const getStillAvailableTreasureIdsByLevel = createSelector(
  [
    Expeditions.selectors.Expeditions.getBarracksTreasureIdsByExpeditionId,
    getAvailableTreasureForExpeditionId,
    getCallbackForAllTreasuresByLevelFromIdList,
  ],
  (treasureIds, allAvailable, $getTreasuresByLevelFrom) => {
    const stillAvailable = allAvailable
      .map((t) => t.id)
      .filter((t) => !treasureIds.includes(t))

    return $getTreasuresByLevelFrom(stillAvailable)
  }
)
