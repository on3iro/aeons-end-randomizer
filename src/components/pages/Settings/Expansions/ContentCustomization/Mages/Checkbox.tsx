import React, { useCallback } from 'react'

import { useModal } from '../../../../../../hooks/useModal'

import CheckboxWithDetails from '../../../../../molecules/CheckboxWithDetails'
import MageModal from '../../../../../molecules/MageModal'

import { SelectedMage, ChangeHandler } from './index'

const Checkbox = ({
  mage,
  changeHandler,
}: {
  mage: SelectedMage
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
        id={mage.id}
        checked={mage.selected}
        label={mage.name}
        changeHandler={handleChange}
        showDetails={handleDetails}
      />
      <MageModal mage={mage} RenderModal={RenderModal} />
    </React.Fragment>
  )
}

export default React.memo(Checkbox)
