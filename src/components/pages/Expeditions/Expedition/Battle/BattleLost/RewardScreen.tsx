import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'types'
import { RootState, actions, selectors } from 'Redux/Store'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'

import * as helpers from '../helpers'

import SupplyReward from './SupplyReward'
import TreasureReward from './TreasureReward'
import MageReward from './MageReward'
import ContinueButton from './ContinueButton'

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

const RewardScreen = ({
  acceptLoss,
  battle,
  expedition,
  hide,
  lists,
  newMage,
  newSupplyCards,
  showNext,
  treasures,
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
      <ModalBodyWrapper hasFooter={true}>
        <SupplyReward
          bigPocketVariant={expedition.bigPocketVariant}
          newSupplyCards={newSupplyCards}
          listsWithSelectionState={listsWithSelectionState}
          handleSelection={handleSelection}
          amountOfCardsToSelect={amountOfCardsToSelect}
          selectedCardsCount={selectedCardsCount}
        />
        <TreasureReward treasures={treasures} />
        <MageReward mage={newMage} />
      </ModalBodyWrapper>
      <ModalFooterWrapper>
        <ContinueButton
          handleContinue={handleContinue}
          finishingIsPossible={finishingIsPossible}
        />
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(RewardScreen))
