import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'

import * as helpers from '../helpers'

import SupplyReward from '../SupplyReward'
import TreasureReward from '../TreasureReward'
import MageReward from '../MageReward'
import ContinueButton from './ContinueButton'
import { InputBranch } from 'Redux/Store/Expeditions/Expeditions/actions'

type OwnProps = {
  branch: InputBranch
  hide: () => void
  showNext?: () => void
  callback: (
    branch: InputBranch,
    banished: string[],
    newSupplyIds: string[]
  ) => Object // FIXME refine type
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId: ownProps.branch.expeditionId }
  )

  const treasures = ownProps.branch.rewards
    ? selectors.Settings.Expansions.Treasures.getTreasureListFromIdList(state, {
        treasureIds: ownProps.branch.rewards.treasure,
      })
    : []

  const newSupplyCards = ownProps.branch.rewards
    ? selectors.Settings.Expansions.Cards.getCardsByIdList(state, {
        cardIds: ownProps.branch.rewards.supplyIds,
      })
    : []

  const expeditionSupply = selectors.getExpeditionSupply(state, {
    expeditionId: ownProps.branch.expeditionId,
  })

  const newMages =
    ownProps.branch.rewards && ownProps.branch.rewards.mages
      ? ownProps.branch.rewards.mages.map(mage => {
          return selectors.Settings.Expansions.Mages.content.getById(state, {
            id: mage,
          })
        })
      : []

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
    newMages,
    lists,
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const RewardScreen = ({
  callback,
  branch,
  expedition,
  hide,
  lists,
  newMages,
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

  // TODO check for Reward bigPocket as well!!!
  const finishingIsPossible =
    expedition.bigPocketVariant ||
    enoughCardsSelected ||
    (!newSupplyCards && newMages.length > 0) ||
    (!newSupplyCards && treasures.length > 0)

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

    callback(branch, banished, newSupplyIds)
    hide()

    if (showNext) {
      showNext()
    }
  }, [hide, branch, callback, showNext, listsWithSelectionState])

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
        <MageReward mages={newMages} />
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
