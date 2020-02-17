import React, { useCallback } from 'react'

import { useModal } from '../../../../../../hooks/useModal'

import CheckboxWithDetails from '../../../../../molecules/CheckboxWithDetails'
import SupplyModal from '../../../../../molecules/SupplyModal'

import { SelectedCard, ChangeHandler } from './index'

const Checkbox = ({
  card,
  changeHandler,
}: {
  card: SelectedCard
  changeHandler: ChangeHandler
}) => {
  const { show, RenderModal } = useModal()

  const handleChange = useCallback(
    (id: string) => {
      changeHandler(id)
    },
    [changeHandler]
  )

  const handleDetails = useCallback(() => {
    show()
  }, [show])

  return (
    <React.Fragment>
      <CheckboxWithDetails
        id={card.id}
        checked={card.selected}
        label={card.name}
        changeHandler={handleChange}
        showDetails={handleDetails}
      />
      <SupplyModal card={card} RenderModal={RenderModal} />
    </React.Fragment>
  )
}

export default React.memo(Checkbox)
