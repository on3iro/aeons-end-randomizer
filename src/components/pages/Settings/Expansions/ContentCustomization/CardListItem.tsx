import React, { useState, useCallback } from 'react'

import { useModal } from '../../../../../hooks/useModal'
import * as types from '../../../../../types'

import CheckboxWithDetails from './CheckboxWithDetails'
import CheckboxList from '../../../../CheckboxList'
import SupplyModal from '../../../Supply/SupplyModal'

const entitiesToItems = (
  entities: ReadonlyArray<types.ICard & { selected: boolean }>,
  includeEntity: boolean = false
) =>
  entities.map(entity => ({
    name: entity.name,
    id: entity.id,
    label: entity.name,
    checked: entity.selected,
    ...(includeEntity && { entity }),
  }))

type Props = {
  entities: ReadonlyArray<types.ICard & { selected: boolean }>
  handleCheckboxChange: (...args: any) => void
  label: string
}

const CardListItem = React.memo(
  ({ entities, handleCheckboxChange, label }: Props) => {
    const { show, RenderModal } = useModal()
    const [modalContentId, setModalContentId] = useState<string>('')

    const CheckboxComponent = useCallback(
      ({ checked, item, label, changeHandler }) => {
        const handleDetails = (id: string) => {
          show()
          setModalContentId(id)
        }

        return (
          <CheckboxWithDetails
            id={item.id}
            checked={checked}
            item={item.id}
            label={label}
            changeHandler={changeHandler}
            showDetails={handleDetails}
            keywords={item.entity.keywords}
          />
        )
      },
      [show]
    )

    return (
      <React.Fragment>
        <CheckboxList
          label={label}
          items={entitiesToItems(entities, true)}
          Component={CheckboxComponent}
          changeHandler={handleCheckboxChange}
        />
        <SupplyModal id={modalContentId} RenderModal={RenderModal} />
      </React.Fragment>
    )
  }
)

export default CardListItem
