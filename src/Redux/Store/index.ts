import { combineReducers, reduceReducers } from 'redux-loop'
import { createSelector } from 'reselect'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'

import * as MainContentLoading from './MainContentLoading'
import * as Settings from './Settings'
import * as Nemesis from './Nemesis'
import * as Mages from './Mages'
import * as Supply from './Supply'
import * as TurnOrder from './TurnOrder'
import * as Expeditions from './Expeditions'

export type RootState = {
  Settings: Settings.State
  MainContentLoading: MainContentLoading.State
  Nemesis: Nemesis.State
  Mages: Mages.State
  Supply: Supply.State
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
  Nemesis: Nemesis.actions,
  Mages: Mages.actions,
  Supply: Supply.actions,
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

export const selectors = {
  Settings: Settings.selectors,
  Main: {
    ContentLoading: MainContentLoading.selectors,
  },
  TurnOrder: TurnOrder.selectors,
  Nemesis: Nemesis.selectors,
  Mages: Mages.selectors,
  Supply: Supply.selectors,
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
}

export type RootAction =
  | MainAction
  | Settings.Action
  | MainContentLoading.Action
  | Nemesis.Action
  | Mages.Action
  | Supply.Action
  | TurnOrder.Action
  | Expeditions.Action

export const initialState = {
  Settings: Settings.initialState,
  MainContentLoading: MainContentLoading.initialState,
  Nemesis: Nemesis.initialState,
  Mages: Mages.initialState,
  Supply: Supply.initialState,
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
    Nemesis: Nemesis.Reducer,
    Mages: Mages.Reducer,
    Supply: Supply.Reducer,
    TurnOrder: TurnOrder.Reducer,
    Expeditions: Expeditions.Reducer,
  })
)
