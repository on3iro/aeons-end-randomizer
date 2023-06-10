import React from 'react'

import * as types from 'aer-types/types'

import ListWrapper from 'components/molecules/ListWrapper'
import Checkbox from './Checkbox'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: types.UpgradedBasicNemesisCard[],
  changeHandler: ChangeHandler
) =>
  items.map((item) => (
    <Checkbox key={item.id} card={item} changeHandler={changeHandler} />
  ))

type Props = {
  entities: types.UpgradedBasicNemesisCard[]
  handleCheckboxChange: (...args: any) => void
  label: string
}

const UpgradedNemesisCardListItem = ({
  entities,
  handleCheckboxChange,
  label,
}: Props) => {
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

export default React.memo(UpgradedNemesisCardListItem)
