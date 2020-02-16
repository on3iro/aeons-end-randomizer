import React from 'react'

import * as types from 'types'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'

import { ListWithSelection } from '../helpers'

import SupplyReward from './SupplyReward'
import TreasureReward from './TreasureReward'
import MageReward from './MageReward'
import ContinueButton from './ContinueButton'

type Props = {
  expedition: types.Expedition
  newSupplyCards: types.ICard[]
  listsWithSelectionState: ListWithSelection[]
  handleSelection: (val: any) => void
  amountOfCardsToSelect: number
  selectedCardsCount: number
  treasures: types.Treasure[]
  mage?: types.Mage
  handleContinue: () => void
  finishingIsPossible: boolean
}

const RewardScreen = ({
  expedition,
  newSupplyCards,
  listsWithSelectionState,
  handleSelection,
  amountOfCardsToSelect,
  selectedCardsCount,
  treasures,
  mage,
  handleContinue,
  finishingIsPossible,
}: Props) => {
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
        <MageReward mage={mage} />
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

export default React.memo(RewardScreen)
