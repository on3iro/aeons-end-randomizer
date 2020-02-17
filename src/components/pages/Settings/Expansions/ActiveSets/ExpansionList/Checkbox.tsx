import React, { useCallback } from 'react'

import CheckboxWithControls from '../../../../../molecules/CheckboxWithControls'

import { SelectedExpansion, ChangeHandler } from './index'

const Checkbox = ({
  expansion,
  changeHandler,
}: {
  expansion: SelectedExpansion
  changeHandler: ChangeHandler
}) => {
  const handleChange = useCallback(
    (id: string) => {
      changeHandler(id)
    },
    [changeHandler]
  )

  return (
    <React.Fragment>
      <CheckboxWithControls
        id={expansion.id}
        checked={expansion.selected}
        label={expansion.name}
        changeHandler={handleChange}
      />
    </React.Fragment>
  )
}

export default React.memo(Checkbox)
