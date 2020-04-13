import React from 'react'

import * as types from 'aer-types'

import ListWrapper from 'components/molecules/ListWrapper'
import Checkbox from './Checkbox'

export type SelectedCard = types.Treasure & { selected: boolean }
export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: SelectedCard[],
  changeHandler: ChangeHandler
) =>
  items.map(item => (
    <Checkbox key={item.id} card={item} changeHandler={changeHandler} />
  ))

type Props = {
  entities: SelectedCard[]
  handleCheckboxChange: (...args: any) => void
  label: string
}

const TreasureListItem = ({ entities, handleCheckboxChange, label }: Props) => {
  return (
    <React.Fragment>
      <ListWrapper label={label}>
        <React.Fragment>
          {renderCheckboxes(entities, handleCheckboxChange)}
        </React.Fragment>
      </ListWrapper>
    </React.Fragment>
  )
}

export default React.memo(TreasureListItem)
