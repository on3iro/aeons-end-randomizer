import React, { useCallback } from 'react'

import { useModal } from '../../../../../../hooks/useModal'

import CheckboxWithDetails from '../../../../../molecules/CheckboxWithDetails'
import NemesisModal from '../../../../../molecules/NemesisModal'

import { SelectedNemesis, ChangeHandler } from './index'

const Checkbox = ({
  nemesis,
  changeHandler,
}: {
  nemesis: SelectedNemesis
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
        id={nemesis.id}
        checked={nemesis.selected}
        label={nemesis.name}
        changeHandler={handleChange}
        showDetails={handleDetails}
      />
      <NemesisModal id={nemesis.id} RenderModal={RenderModal} />
    </React.Fragment>
  )
}

export default React.memo(Checkbox)
