import React from 'react'

import SupplyList, { Props as ListProps } from '../SupplyList'

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
  lists.map(list => {
    const selectionContextValue = {
      selectionHandler,
      listId: list.id,
    }

    return (
      <div key={list.id}>
        <SelectionHandlerContext.Provider value={selectionContextValue}>
          {list.title && <h2>{list.title}</h2>}
          <SupplyList {...list} />
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

const SupplySelection = React.memo(
  ({
    amountOfCardsToSelect,
    selectedCardsCount,
    lists,
    handleSelection,
  }: Props) => {
    return (
      <Wrapper>
        <h2>Please select {amountOfCardsToSelect} cards to banish!</h2>
        <p>
          <b>Cards selected:</b> {selectedCardsCount}/{amountOfCardsToSelect}
        </p>
        {renderLists(lists, handleSelection)}
      </Wrapper>
    )
  }
)

export default SupplySelection
