import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import * as types from 'types'

import LossRewardTypeSelection from './LossRewardTypeSelection'
import RewardScreen from './RewardScreen'

import * as helpers from '../helpers'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNext?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId: ownProps.battle.expeditionId }
  )

  const treasures = ownProps.battle.rewards
    ? selectors.Settings.Expansions.Treasures.getTreasureListFromIdList(state, {
        treasureIds: ownProps.battle.rewards.treasure,
      })
    : []

  const newSupplyCards = ownProps.battle.rewards
    ? selectors.Settings.Expansions.SelectedCards.getCardsByIdList(state, {
        cardIds: ownProps.battle.rewards.supplyIds,
      })
    : []

  const expeditionSupply = selectors.getExpeditionSupply(state, {
    expeditionId: ownProps.battle.expeditionId,
  })

  const newMage =
    ownProps.battle.rewards && ownProps.battle.rewards.mage
      ? selectors.Settings.Expansions.SelectedMages.getMageById(state, {
          id: ownProps.battle.rewards.mage,
        })
      : undefined

  const lists = [
    {
      id: 'newSupply',
      tiles: newSupplyCards.map(tile => ({
        ...tile,
        visualSelection: false,
      })),
      title: 'New cards',
    },
    {
      id: 'expedition',
      tiles: expeditionSupply.map(tile => ({
        ...tile,
        visualSelection: false,
      })),
    },
  ]

  return {
    expedition,
    treasures,
    newSupplyCards,
    expeditionSupply,
    newMage,
    lists,
  }
}

const mapDispatchToProps = {
  acceptLoss: actions.Expeditions.Expeditions.acceptLoss,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BattleLost = ({
  battle,
  hide,
  acceptLoss,
  showNext,
  expedition,
  treasures,
  lists,
  newSupplyCards,
  newMage,
}: Props) => {
  const [listsWithSelectionState, updateLists] = useState<
    Array<helpers.ListWithSelection>
  >(lists)
  const [selectedCardsCount, updateSelectedCardsCount] = useState(0)
  const amountOfCardsToSelect = newSupplyCards.length
  const enoughCardsSelected = selectedCardsCount === amountOfCardsToSelect
  const finishingIsPossible =
    expedition.bigPocketVariant ||
    enoughCardsSelected ||
    !!newMage ||
    treasures.length > 0

  const handleSelection = useCallback(
    (selectedValue: { supplyCardId: string; listId: string }) => {
      const { affectedList, affectedListIndex } = helpers.getAffectedList(
        listsWithSelectionState,
        selectedValue
      )

      if (affectedList) {
        const updatedLists = helpers.createUpdatedLists(
          affectedList,
          affectedListIndex,
          selectedValue,
          finishingIsPossible,
          listsWithSelectionState
        )

        const numberOfSelectedCards = helpers.calculateNumberOfSelectedCards(
          updatedLists
        )

        updateSelectedCardsCount(numberOfSelectedCards)
        updateLists(updatedLists)
      }
    },
    [
      listsWithSelectionState,
      updateLists,
      updateSelectedCardsCount,
      finishingIsPossible,
    ]
  )

  const handleContinue = useCallback(() => {
    const listFlattendedToTiles = listsWithSelectionState.reduce(
      (acc: any, list) => {
        return [...acc, ...list.tiles]
      },
      []
    )

    const { banished, newSupplyIds } = helpers.createBanishedAndSupplyFromList(
      listFlattendedToTiles
    )

    acceptLoss(battle, banished, newSupplyIds)
    hide()

    if (showNext) {
      showNext()
    }
  }, [hide, battle, acceptLoss, showNext, listsWithSelectionState])

  return (
    <React.Fragment>
      {!battle.rewards ? (
        <LossRewardTypeSelection battle={battle} />
      ) : (
        <RewardScreen
          expedition={expedition}
          newSupplyCards={newSupplyCards}
          listsWithSelectionState={listsWithSelectionState}
          handleSelection={handleSelection}
          amountOfCardsToSelect={amountOfCardsToSelect}
          selectedCardsCount={selectedCardsCount}
          treasures={treasures}
          mage={newMage}
          handleContinue={handleContinue}
          finishingIsPossible={finishingIsPossible}
        />
      )}
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BattleLost))
