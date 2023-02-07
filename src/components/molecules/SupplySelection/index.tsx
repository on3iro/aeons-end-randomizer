import React from 'react'

import SupplyList, { Props as ListProps } from '../SupplyList'

import SectionHeadline from '../../atoms/SectionHeadline'

import InfoItem from '../InfoItem'

import Wrapper from './Wrapper'

type ContextProps = {
  listId?: string
  selectionHandler: (val: any) => void
}

export const SelectionHandlerContext = React.createContext<ContextProps>({
  listId: undefined,
  selectionHandler: (_: string) => undefined,
})

type List = ListProps & {
  title?: string
  id: string
}

// FIXME refine types
const renderLists = (lists: List[], selectionHandler: (val: any) => void) =>
  lists.map((list) => {
    const selectionContextValue = {
      selectionHandler,
      listId: list.id,
    }

    return (
      <div key={list.id}>
        <SelectionHandlerContext.Provider value={selectionContextValue}>
          {list.title && <SectionHeadline>{list.title}</SectionHeadline>}
          <SupplyList
            {...{
              ...list,
              tiles: list.tiles.map((tile) => {
                return { ...tile, canBeLocked: false }
              }),
            }}
          />
        </SelectionHandlerContext.Provider>
      </div>
    )
  })

type Props = {
  lists: List[]
  handleSelection: (val: any) => void
  amountOfCardsToSelect: number
  selectedCardsCount: number
}

const SupplySelection = ({
  amountOfCardsToSelect,
  selectedCardsCount,
  lists,
  handleSelection,
}: Props) => {
  return (
    <Wrapper>
      <SectionHeadline>
        Please select {amountOfCardsToSelect} cards to banish!
      </SectionHeadline>
      <InfoItem
        label="Cards selected"
        info={`${selectedCardsCount}/${amountOfCardsToSelect}`}
      ></InfoItem>
      {renderLists(lists, handleSelection)}
    </Wrapper>
  )
}

export default React.memo(SupplySelection)
