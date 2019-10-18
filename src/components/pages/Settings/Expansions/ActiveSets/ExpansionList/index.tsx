import React from 'react'

import * as types from '../../../../../../types'

import ListWrapper from '../../../../../molecules/ListWrapper'

import Checkbox from './Checkbox'

export type SelectedExpansion = types.Expansion & { selected: boolean }
export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: SelectedExpansion[],
  changeHandler: ChangeHandler
) =>
  items.map(item => <Checkbox expansion={item} changeHandler={changeHandler} />)

type Props = {
  expansions: SelectedExpansion[]
  handleChange: (selection: string) => void
  label: string
}

const ExpansionList = React.memo(
  ({ handleChange, expansions, label }: Props) => {
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
)

ExpansionList.displayName = 'ExpansionList'

export default ExpansionList
