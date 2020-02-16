import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import * as types from 'types'

import { RollLossType } from 'Redux/Store/Expeditions/Expeditions'

import LossRewardTypeSelection from './LossRewardTypeSelection'
import RewardScreen from './RewardScreen'

import * as helpers from '../helpers'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNext?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const { expeditionId } = ownProps.battle

  const gemIds = selectors.getStillAvailableGemIds(state, {
    expeditionId,
  })
  const relicIds = selectors.getStillAvailableRelicIds(state, {
    expeditionId,
  })
  const spellIds = selectors.getStillAvailableSpellIds(state, {
    expeditionId,
  })

  const treasure1Ids = selectors.getNewTreasureIdsByLevel(state, {
    treasureLevel: 1,
    expeditionId,
  })
  const treasure2Ids = selectors.getNewTreasureIdsByLevel(state, {
    treasureLevel: 2,
    expeditionId,
  })
  const treasure3Ids = selectors.getNewTreasureIdsByLevel(state, {
    treasureLevel: 3,
    expeditionId,
  })

  const mageIds = selectors.getStillAvailableMageIds(state, { expeditionId })

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
    dataConfig: {
      gemIds,
      relicIds,
      spellIds,
      mageIds,
      treasure1Ids,
      treasure2Ids,
      treasure3Ids,
    },
  }
}

const mapDispatchToProps = {
  rollLoss: actions.Expeditions.Expeditions.rollLoss,
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
  rollLoss,
  dataConfig,
  expedition,
  treasures,
  lists,
  newSupplyCards,
  newMage,
}: Props) => {
  const [rewardSelectValue, updateRewardSelectValue] = useState<RollLossType>(
    'mage'
  )

  const handleRewardSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>, child: any) => {
      updateRewardSelectValue(e.target.value as RollLossType)
    },
    [updateRewardSelectValue]
  )

  const handleRewardConfirmation = useCallback(() => {
    const config = {
      type: rewardSelectValue as RollLossType, // FIXME we should try to get it typesafe instead of casting
      battle,
      ...dataConfig,
    }

    rollLoss(config)
  }, [rewardSelectValue, battle, rollLoss, dataConfig])

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
        <LossRewardTypeSelection
          tier={battle.nemesisTier.tier}
          rewardSelectValue={rewardSelectValue}
          handleRewardSelectChange={handleRewardSelectChange}
          handleRewardConfirmation={handleRewardConfirmation}
        />
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
