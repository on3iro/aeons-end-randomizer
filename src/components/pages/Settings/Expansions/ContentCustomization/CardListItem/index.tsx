import React from 'react'

import * as types from 'aer-types/types'

import ListWrapper from 'components/molecules/ListWrapper'

import Checkbox from './Checkbox'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = (items: types.ICard[], changeHandler: ChangeHandler) =>
  items.map((item) => (
    <Checkbox key={item.id} card={item} changeHandler={changeHandler} />
  ))

type Props = {
  entities: types.ICard[]
  handleCheckboxChange: (...args: any) => void
  label: string
}

const CardListItem = ({ entities, handleCheckboxChange, label }: Props) => {
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

export default React.memo(CardListItem)
