import { combineReducers, reduceReducers } from 'redux-loop'
import { createSelector } from 'reselect'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'

import * as MainContentLoading from './MainContentLoading'
import * as Settings from './Settings'
import * as Randomizer from './Randomizer'
import * as TurnOrder from './TurnOrder'
import * as Expeditions from './Expeditions'

export type RootState = {
  Settings: Settings.State
  MainContentLoading: MainContentLoading.State
  Randomizer: Randomizer.State
  TurnOrder: TurnOrder.State
  Expeditions: Expeditions.State
}

export enum ActionTypes {
  USER_CONFIGURATION_GET = 'ROOT/USER_CONFIGURATION_GET',
}

export const mainActions = {
  getUserConfiguration: () => createAction(ActionTypes.USER_CONFIGURATION_GET),
}

export type MainAction = ActionsUnion<typeof mainActions>

export const actions = {
  Settings: Settings.actions,
  Main: mainActions,
  TurnOrder: TurnOrder.actions,
  Randomizer: Randomizer.actions,
  Expeditions: Expeditions.actions,
}

const getUpgradedBasicNemesisCardsByExpeditionId = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards
      .getUpgradedBasicNemesisCards,
  ],
  (expedition, upgradedBasicNemsisCards) =>
    expedition.upgradedBasicNemesisCards.map(
      cardId => upgradedBasicNemsisCards[cardId]
    )
)

const getNewTreasureByLevel = createSelector(
  [
    Settings.selectors.Expansions.getTreasuresByLevelForSelectedExpansions,
    Expeditions.selectors.Expeditions.getExpeditionById,
  ],
  (treasures, expedition) =>
    treasures.filter(
      treasure => !expedition.barracks.treasureIds.includes(treasure.id)
    )
)

const getNewTreasureIdsByLevel = createSelector(
  [getNewTreasureByLevel],
  treasures => treasures.map(treasure => treasure.id)
)

const getStillAvailableGemIds = createSelector(
  [
    Settings.selectors.Expansions.getGemIdsForSelectedExpansions,
    Expeditions.selectors.Expeditions.getSupplyByExpeditionId,
  ],
  (allAvailableIds, expeditionSupplyIds) =>
    allAvailableIds.filter(id => !expeditionSupplyIds.includes(id))
)
const getStillAvailableRelicIds = createSelector(
  [
    Settings.selectors.Expansions.getRelicIdsForSelectedExpansions,
    Expeditions.selectors.Expeditions.getSupplyByExpeditionId,
  ],
  (allAvailableIds, expeditionSupplyIds) =>
    allAvailableIds.filter(id => !expeditionSupplyIds.includes(id))
)
const getStillAvailableSpellIds = createSelector(
  [
    Settings.selectors.Expansions.getSpellIdsForSelectedExpansions,
    Expeditions.selectors.Expeditions.getSupplyByExpeditionId,
  ],
  (allAvailableIds, expeditionSupplyIds) =>
    allAvailableIds.filter(id => !expeditionSupplyIds.includes(id))
)

const getStillAvailableMageIds = createSelector(
  [
    Settings.selectors.Expansions.getSelectedMagesForSelectedExpansions,
    Expeditions.selectors.Expeditions.getMagesByExpeditionId,
  ],
  (mages, expeditionMageIds) =>
    mages.map(mage => mage.id).filter(id => !expeditionMageIds.includes(id))
)

const getExpeditionSupply = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.SelectedCards.getSelectedCardsLookupObject,
  ],
  (expedition, supplyCards) =>
    expedition.barracks.supplyIds.map(id => supplyCards[id])
)

const getExpeditionMages = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.SelectedMages.getSelectedMagesLookupObject,
  ],
  (expedition, mages) => expedition.barracks.mageIds.map(id => mages[id])
)

const getExpeditionTreasure = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.Treasures.getTreasures,
  ],
  (expedition, treasures) =>
    expedition.barracks.treasureIds.map(id => treasures[id])
)

const getExpeditionUpgradedBasicNemesis = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.UpgradedBasicNemesisCards
      .getUpgradedBasicNemesisCards,
  ],
  (expedition, upgradedBasicNemsisCards) =>
    expedition.upgradedBasicNemesisCards.map(id => upgradedBasicNemsisCards[id])
)

const getExpeditionBanishedCards = createSelector(
  [
    Expeditions.selectors.Expeditions.getExpeditionById,
    Settings.selectors.Expansions.SelectedCards.getSelectedCardsLookupObject,
  ],
  (expedition, cards) => expedition.banished.map(id => cards[id])
)

export const selectors = {
  Settings: Settings.selectors,
  Main: {
    ContentLoading: MainContentLoading.selectors,
  },
  TurnOrder: TurnOrder.selectors,
  Randomizer: Randomizer.selectors,
  Expeditions: Expeditions.selectors,

  // Top level selectors
  getUpgradedBasicNemesisCardsByExpeditionId,
  getNewTreasureByLevel,
  getNewTreasureIdsByLevel,
  getStillAvailableGemIds,
  getStillAvailableRelicIds,
  getStillAvailableSpellIds,
  getStillAvailableMageIds,
  getExpeditionSupply,
  getExpeditionMages,
  getExpeditionTreasure,
  getExpeditionUpgradedBasicNemesis,
  getExpeditionBanishedCards,
}

export type RootAction =
  | MainAction
  | Settings.Action
  | MainContentLoading.Action
  | Randomizer.Action
  | TurnOrder.Action
  | Expeditions.Action

export const initialState = {
  Settings: Settings.initialState,
  MainContentLoading: MainContentLoading.initialState,
  Randomizer: Randomizer.initialState,
  TurnOrder: TurnOrder.initialState,
  Expeditions: Expeditions.initialState,
}

export const MainReducer: LoopReducer<RootState, RootAction> = (
  state: RootState = initialState,
  action: RootAction
) => {
  switch (action.type) {
    case ActionTypes.USER_CONFIGURATION_GET: {
      return loop(
        state,
        Cmd.list<RootAction>([
          Cmd.action(
            actions.Settings.Expansions.SelectedExpansions.fetchFromDB()
          ),
          Cmd.action(actions.Settings.Expansions.SelectedCards.fetchFromDB()),
          Cmd.action(actions.Settings.Expansions.SelectedNemeses.fetchFromDB()),
          Cmd.action(actions.Settings.Expansions.SelectedMages.fetchFromDB()),
          Cmd.action(actions.Settings.SupplySetups.fetchFromDB()),
          Cmd.action(actions.TurnOrder.Configuration.fetchFromDB()),
          Cmd.action(actions.Expeditions.Expeditions.fetchFromDB()),
        ])
      )
    }

    default: {
      return state
    }
  }
}

export const RootReducer = reduceReducers(
  MainReducer,
  combineReducers<RootState>({
    Settings: Settings.Reducer,
    MainContentLoading: MainContentLoading.Reducer,
    Randomizer: Randomizer.Reducer,
    TurnOrder: TurnOrder.Reducer,
    Expeditions: Expeditions.Reducer,
  })
)
