import React from 'react'

import * as types from 'types'

import SupplySelection from 'components/molecules/SupplySelection'
import MarketTile from 'components/molecules/MarketTile'

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
      {newSupplyCards.length > 0 && !bigPocketVariant ? (
        <SupplySelection
          lists={listsWithSelectionState}
          handleSelection={handleSelection}
          amountOfCardsToSelect={amountOfCardsToSelect}
          selectedCardsCount={selectedCardsCount}
        />
      ) : (
        newSupplyCards.length > 0 && (
          <MarketTile marketTile={newSupplyCards[0]} />
        )
      )}
    </>
  )
}

export default React.memo(SupplyReward)
