import { createSelector, OutputSelector } from 'reselect'

import * as types from 'aer-types/types'

import { RootState } from 'Redux/Store'

import * as Expansions from './Expansions'
import * as Cards from './Cards'
import * as Nemeses from './Nemeses'
import * as Mages from './Mages'
import * as Treasures from './Treasures'
import * as BasicNemesisCards from './BasicNemesisCards'
import * as UpgradedBasicNemesisCards from './UpgradedBasicNemesisCards'

// FIXME any typing sucks ;)
export const getSelectedEntitiesForSelectedExpansions = <T>(
  entitySelector: OutputSelector<
    RootState,
    Array<{ expansion: string } & T>,
    any
  >
) =>
  createSelector(
    [Expansions.selectors.selected.getSelected, entitySelector],
    (expansionIds, entities) =>
      entities.filter(
        (entity) => entity && expansionIds.includes(entity.expansion)
      )
  )

export const getSelectedCardsForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  Cards.selectors.getSelectedCards
)

export const getSelectedCardIdsForSelectedExpansions = createSelector(
  [getSelectedCardsForSelectedExpansions],
  (cards) => cards.map((card) => card.id)
)

export const createIdsByCardTypeSelector = (type: types.CardType) =>
  createSelector(
    [getSelectedCardsForSelectedExpansions],
    (selectedCards: types.ICard[]) =>
      selectedCards.filter((card) => card.type === type).map((card) => card.id)
  )

export const getGemIdsForSelectedExpansions = createIdsByCardTypeSelector('Gem')
export const getRelicIdsForSelectedExpansions = createIdsByCardTypeSelector(
  'Relic'
)
export const getSpellIdsForSelectedExpansions = createIdsByCardTypeSelector(
  'Spell'
)

export const getSelectedNemesesForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  Nemeses.selectors.getSelectedNemeses
)

export const getSelectedNemesisIdsForSelectedExpansions = createSelector(
  [getSelectedNemesesForSelectedExpansions],
  (nemeses) => nemeses.map((nemesis) => nemesis.id)
)

export const getSelectedMagesForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  Mages.selectors.getSelectedMages
)

export const getSelectedMageIdsForSelectedExpansions = createSelector(
  [getSelectedMagesForSelectedExpansions],
  (selectedMages) => selectedMages.map((mage) => mage.id)
)

export const getSelectedTreasuresForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  Treasures.selectors.getSelectedTreasures
)

export const getSelectedTreasureIdsForSelectedExpansions = createSelector(
  [getSelectedTreasuresForSelectedExpansions],
  (treasures) => treasures.map((treasure) => treasure.id)
)

export const getTreasuresByLevelForSelectedExpansions = createSelector(
  [
    Expansions.selectors.selected.getSelected,
    Treasures.selectors.getTreasureListByLevel,
  ],
  (expansionIds, entities) =>
    entities.filter((entity) => expansionIds.includes(entity.expansion))
)

export const getTreasureIds = (
  _: unknown,
  { treasureIds }: { treasureIds: string[] }
) => treasureIds

export const getTreasuresByLevelMappedFromIds = createSelector(
  [Treasures.selectors.getTreasureListByLevel, getTreasureIds],
  (treasures, treasureIds) =>
    treasures.filter((t) => treasureIds.includes(t.id))
)

export const getTreasureIdsByLevelMappedFromIds = createSelector(
  [getTreasuresByLevelMappedFromIds],
  (treasures) => treasures.map((t) => t.id)
)

export const getSelectedUpgradedBasicNemesisCardsForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  UpgradedBasicNemesisCards.selectors.getSelectedUpgradedBasicNemesisCards
)

export const getSelectedUpgradedBasicNemesisCardIdsForSelectedExpansions = createSelector(
  [getSelectedUpgradedBasicNemesisCardsForSelectedExpansions],
  (upgradedBasicNemesisCards) =>
    upgradedBasicNemesisCards.map((card) => card.id)
)

export const getSelectedBasicNemesisCardsForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  BasicNemesisCards.selectors.getSelectedContent
)

export const getSelectedBasicNemesisCardIdsForSelectedExpansions = createSelector(
  [getSelectedBasicNemesisCardsForSelectedExpansions],
  (basicNemesisCards) => basicNemesisCards.map((card) => card.id)
)
