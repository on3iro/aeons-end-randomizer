import React from 'react'

import * as types from 'aer-types/types'

import ListWrapper from 'components/molecules/ListWrapper'

import Checkbox from './Checkbox'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: types.Expansion[],
  changeHandler: ChangeHandler
) =>
  items.map((item) => (
    <Checkbox key={item.id} expansion={item} changeHandler={changeHandler} />
  ))

type Props = {
  expansions: types.Expansion[]
  handleChange: (selection: string) => void
  label: string
}

const ExpansionList = ({ handleChange, expansions, label }: Props) => {
  return (
    <React.Fragment>
      <ListWrapper label={label}>
        <React.Fragment>
          {renderCheckboxes(expansions, handleChange)}
        </React.Fragment>
      </ListWrapper>
    </React.Fragment>
  )
}

export default React.memo(ExpansionList)
