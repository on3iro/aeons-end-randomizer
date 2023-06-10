import { createSelector } from 'reselect'

import * as Settings from './Settings'
import * as Expeditions from './Expeditions'
import { getContentByIdWithLanguageFallback } from './Settings/Expansions/helpers'
import { magesHaveSameName } from 'Redux/helpers'

export const getUpgradedBasicNemesisCardsByExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (expedition, content, languages) =>
    expedition.upgradedBasicNemesisCards.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getExpeditionSupply = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Cards.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (expedition, content, languages) =>
    expedition.barracks.supplyIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getExpeditionMages = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Mages.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (expedition, content, languages) =>
    expedition.barracks.mageIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getExpeditionTreasure = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Treasures.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (expedition, content, languages) =>
    expedition.barracks.treasureIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getExpeditionUpgradedBasicNemesis = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (expedition, content, languages) =>
    expedition.upgradedBasicNemesisCards.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getExpeditionBanishedCards = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Cards.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (expedition, content, languages) =>
    expedition.banished.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getAvailableNemesisForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.Nemeses.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (settingsSnapshot, content, languages) =>
    settingsSnapshot.availableNemesisIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getAvailableCardsForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.Cards.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (settingsSnapshot, content, languages) =>
    settingsSnapshot.availableCardIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getAvailableMagesForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.Mages.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (settingsSnapshot, content, languages) =>
    settingsSnapshot.availableMageIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getAvailableTreasureForExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
    Settings.selectors.Expansions.Treasures.content.getContent,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (settingsSnapshot, content, languages) =>
    settingsSnapshot.availableTreasureIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

export const getAvailableUpgradedBasicNemesisCardsForExpeditionId =
  createSelector(
    [
      Expeditions.selectors.Expeditions.getSettingsSnapshotByExpeditionId,
      Settings.selectors.Expansions.UpgradedBasicNemesisCards.content
        .getContent,
      Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
    ],
    (settingsSnapshot, content, languages) =>
      settingsSnapshot.availableUpgradedBasicNemesisCardIds.map((id) =>
        getContentByIdWithLanguageFallback(languages, content, id)
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
    Settings.selectors.Expansions.Cards.content.getContent,
    getStillAvailableGemIds,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (cards, stillAvailableGemIds, languages) =>
    stillAvailableGemIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, cards, id)
    )
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
    Settings.selectors.Expansions.Cards.content.getContent,
    getStillAvailableRelicIds,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (cards, stillAvailableRelicIds, languages) =>
    stillAvailableRelicIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, cards, id)
    )
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
    Settings.selectors.Expansions.Cards.content.getContent,
    getStillAvailableSpellIds,
    Settings.selectors.Expansions.Languages.getLanguagesByExpansion,
  ],
  (cards, stillAvailableSpellIds, languages) =>
    stillAvailableSpellIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, cards, id)
    )
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

export const getStillAvailableMageWithUniqueNameIds = createSelector(
  [getAvailableMagesForExpeditionId, getExpeditionMages],
  (availableMages, expeditionMages) =>
    availableMages
      .filter((av) => !expeditionMages.some((em) => magesHaveSameName(av, em)))
      .map((mage) => mage.id)
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
