import React, { useCallback } from 'react'

import CheckboxWithDetails from 'components/molecules/CheckboxWithDetails'

import { SelectedCard, ChangeHandler } from './index'

const Checkbox = ({
  card,
  changeHandler,
}: {
  card: SelectedCard
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
      <CheckboxWithDetails
        id={card.id}
        checked={card.selected}
        label={card.name}
        changeHandler={handleChange}
        showDetails={() => {
          return
        }}
      />
    </React.Fragment>
  )
}

export default React.memo(Checkbox)
