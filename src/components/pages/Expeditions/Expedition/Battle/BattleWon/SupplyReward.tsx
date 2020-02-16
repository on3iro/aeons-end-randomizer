import React from 'react'

import * as types from 'types'

import SupplySelection from 'components/molecules/SupplySelection'
import SupplyList from 'components/molecules/SupplyList'

import { ListWithSelection } from '../helpers'

type Props = {
  bigPocketVariant: boolean
  newSupplyCards: types.ICard[]
  listsWithSelectionState: ListWithSelection[]
  handleSelection: (val: any) => void
  amountOfCardsToSelect: number
  selectedCardsCount: number
}

const SupplyReward = ({
  bigPocketVariant,
  newSupplyCards,
  listsWithSelectionState,
  handleSelection,
  amountOfCardsToSelect,
  selectedCardsCount,
}: Props) => {
  return (
    <>
      {bigPocketVariant ? (
        <SupplyList tiles={newSupplyCards} />
      ) : (
        <SupplySelection
          lists={listsWithSelectionState}
          handleSelection={handleSelection}
          amountOfCardsToSelect={amountOfCardsToSelect}
          selectedCardsCount={selectedCardsCount}
        />
      )}
    </>
  )
}

export default React.memo(SupplyReward)
