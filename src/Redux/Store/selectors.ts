import { createSelector } from 'reselect'

import * as Settings from './Settings'
import * as Expeditions from './Expeditions'

export const getUpgradedBasicNemesisCardsByExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards.content.getContent,
  ],
  (expedition, upgradedBasicNemsisCards) =>
    expedition.upgradedBasicNemesisCards.map(
      cardId => upgradedBasicNemsisCards.ENG[cardId]
    )
)

export const getExpeditionSupply = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Cards.content.getContent,
  ],
  (expedition, cards) => expedition.barracks.supplyIds.map(id => cards.ENG[id])
)

export const getExpeditionMages = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Mages.content.getContent,
  ],
  (expedition, mages) => expedition.barracks.mageIds.map(id => mages.ENG[id])
)

export const getExpeditionTreasure = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Treasures.content.getContent,
  ],
  (expedition, treasures) =>
    expedition.barracks.treasureIds.map(id => treasures.ENG[id])
)

export const getExpeditionUpgradedBasicNemesis = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards.content.getContent,
  ],
  (expedition, upgradedBasicNemsisCards) =>
    expedition.upgradedBasicNemesisCards.map(
      id => upgradedBasicNemsisCards.ENG[id]
    )
)

export const getExpeditionBanishedCards = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Cards.content.getContent,
  ],
  (expedition, cards) => expedition.banished.map(id => cards.ENG[id])
)

export const getAvailableNemesisForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.Nemeses.content.getContent,
  ],
  (settingsSnapshot, nemeses) =>
    settingsSnapshot.availableNemesisIds.map(id => nemeses.ENG[id])
)

export const getAvailableCardsForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.Cards.content.getContent,
  ],
  (settingsSnapshot, cards) =>
    settingsSnapshot.availableCardIds.map(id => cards.ENG[id])
)

export const getAvailableMagesForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.Mages.content.getContent,
  ],
  (settingsSnapshot, allMages) =>
    settingsSnapshot.availableMageIds.map(id => allMages.ENG[id])
)

export const getAvailableTreasureForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.Treasures.content.getContent,
  ],
  (settingsSnapshot, treasures) =>
    settingsSnapshot.availableTreasureIds.map(id => treasures.ENG[id])
)

export const getAvailableUpgradedBasicNemesisCardsForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards.content.getContent,
  ],
  (settingsSnapshot, UBNCards) =>
    settingsSnapshot.availableUpgradedBasicNemesisCardIds.map(
      id => UBNCards.ENG[id]
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
      .filter(card => card.type === 'Gem')
      .map(card => card.id)
      .filter(id => ![...expeditionSupplyIds, ...banishedIds].includes(id))
)

export const getStillAvailableGems = createSelector(
  [
    Settings.selectors.Expansions.Cards.content.getContent,
    getStillAvailableGemIds,
  ],
  (cards, stillAvailableGemIds) => stillAvailableGemIds.map(id => cards.ENG[id])
)

export const getStillAvailableRelicIds = createSelector(
  [
    getAvailableCardsForExpeditionId,
    Expeditions.selectors.Expeditions.getSupplyByExpeditionId,
    Expeditions.selectors.Expeditions.getBanishedByExpeditionId,
  ],
  (availableCards, expeditionSupplyIds, banishedIds) =>
    availableCards
      .filter(card => card.type === 'Relic')
      .map(card => card.id)
      .filter(id => ![...expeditionSupplyIds, ...banishedIds].includes(id))
)

export const getStillAvailableRelics = createSelector(
  [
    Settings.selectors.Expansions.Cards.content.getContent,
    getStillAvailableRelicIds,
  ],
  (cards, stillAvailableRelicIds) =>
    stillAvailableRelicIds.map(id => cards.ENG[id])
)

export const getStillAvailableSpellIds = createSelector(
  [
    getAvailableCardsForExpeditionId,
    Expeditions.selectors.Expeditions.getSupplyByExpeditionId,
    Expeditions.selectors.Expeditions.getBanishedByExpeditionId,
  ],
  (availableCards, expeditionSupplyIds, banishedIds) =>
    availableCards
      .filter(card => card.type === 'Spell')
      .map(card => card.id)
      .filter(id => ![...expeditionSupplyIds, ...banishedIds].includes(id))
)

export const getStillAvailableSpells = createSelector(
  [
    Settings.selectors.Expansions.Cards.content.getContent,
    getStillAvailableSpellIds,
  ],
  (cards, stillAvailableSpellIds) =>
    stillAvailableSpellIds.map(id => cards.ENG[id])
)

export const getStillAvailableMageIds = createSelector(
  [
    getAvailableMagesForExpeditionId,
    Expeditions.selectors.Expeditions.getMagesByExpeditionId,
  ],
  (availableMages, expeditionMageIds) =>
    availableMages
      .map(mage => mage.id)
      .filter(id => !expeditionMageIds.includes(id))
)

// Inversion of control -> this is so that we can compose a selector with
// the result of a consuming one. This selector returns a callback, which can
// in turn be used inside the consuming selector.
// We will denote such a callback with a '$' prefix for the consuming parameter
const getCallbackForAllTreasuresByLevelFromIdList = createSelector(
  [Settings.selectors.Expansions.Treasures.getTreasureIdsByTreasureLevel],
  tByLevel => (treasureIds: string[]) => {
    return treasureIds.filter(id => tByLevel.includes(id))
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
      .map(t => t.id)
      .filter(t => !treasureIds.includes(t))

    return $getTreasuresByLevelFrom(stillAvailable)
  }
)
