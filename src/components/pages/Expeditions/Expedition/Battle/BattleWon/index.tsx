import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import * as types from 'types'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'

import {
  createUpdatedLists,
  getAffectedList,
  ListWithSelection,
  calculateNumberOfSelectedCards,
  createBanishedAndSupplyFromList,
} from '../helpers'

import SupplyReward from './SupplyReward'
import TreasureReward from './TreasureReward'
import UnlockNextButton from './UnlockNextButton'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNext?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const treasures =
    ownProps.battle.rewards !== undefined
      ? selectors.Settings.Expansions.Treasures.getTreasureListFromIdList(
          state,
          { treasureIds: ownProps.battle.rewards.treasure }
        )
      : []

  const newSupplyCards = ownProps.battle.rewards
    ? selectors.Settings.Expansions.SelectedCards.getCardsByIdList(state, {
        cardIds: ownProps.battle.rewards.supplyIds,
      })
    : []

  const expeditionSupply = selectors.getExpeditionSupply(state, {
    expeditionId: ownProps.battle.expeditionId,
  })

  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId: ownProps.battle.expeditionId }
  )

  // TODO implement showSupplyDetails handler (useCallback and a single handler for both lists)
  const listsWithVisualSelection = [
    {
      id: 'newSupply',
      tiles: newSupplyCards.map((tile) => ({
        ...tile,
        visualSelection: false,
      })),
      title: 'New cards',
    },
    {
      id: 'expedition',
      tiles: expeditionSupply.map((tile) => ({
        ...tile,
        visualSelection: false,
      })),
      title: 'Supply',
    },
  ]

  return {
    treasures,
    newSupplyCards,
    expeditionSupply,
    expedition,
    listsWithVisualSelection,
  }
}

const mapDispatchToProps = {
  finishBattle: actions.Expeditions.Expeditions.finishBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BattleWon = ({
  battle,
  expedition,
  finishBattle,
  hide,
  newSupplyCards,
  showNext,
  treasures,
  listsWithVisualSelection,
}: Props) => {
  const [listsWithSelectionState, updateLists] = useState<
    Array<ListWithSelection>
  >(listsWithVisualSelection)
  const [selectedCardsCount, updateSelectedCardsCount] = useState(0)

  const amountOfCardsToSelect = newSupplyCards.length
  const enoughCardsSelected = selectedCardsCount === amountOfCardsToSelect
  const finishingIsPossible = expedition.bigPocketVariant || enoughCardsSelected

  const handleSelection = useCallback(
    (selectedValue: { supplyCardId: string; listId: string }) => {
      const { affectedList, affectedListIndex } = getAffectedList(
        listsWithSelectionState,
        selectedValue
      )

      if (affectedList) {
        const updatedLists = createUpdatedLists(
          affectedList,
          affectedListIndex,
          selectedValue,
          finishingIsPossible,
          listsWithSelectionState
        )

        const numberOfSelectedCards = calculateNumberOfSelectedCards(
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

  const handleFinish = useCallback(() => {
    const listFlattendedToTiles = listsWithSelectionState.reduce(
      (acc: any, list) => {
        return [...acc, ...list.tiles]
      },
      []
    )

    const { banished, newSupplyIds } = createBanishedAndSupplyFromList(
      listFlattendedToTiles
    )

    finishBattle(battle, newSupplyIds, banished)
    hide()

    if (showNext) {
      showNext()
    }
  }, [battle, hide, finishBattle, showNext, listsWithSelectionState])

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
      </ModalBodyWrapper>
      <ModalFooterWrapper>
        <UnlockNextButton
          handleFinish={handleFinish}
          finishingIsPossible={finishingIsPossible}
        />
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BattleWon))
