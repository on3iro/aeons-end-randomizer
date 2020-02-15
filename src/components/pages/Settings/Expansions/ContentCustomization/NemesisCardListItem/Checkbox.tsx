import React, { useCallback } from 'react'

import { useModal } from 'hooks/useModal'

import CheckboxWithDetails from 'components/molecules/CheckboxWithDetails'
import BasicNemesisCardModal from 'components/molecules/BasicNemesisCardModal'

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
      <BasicNemesisCardModal card={card} RenderModal={RenderModal} />
    </React.Fragment>
  )
}

export default React.memo(Checkbox)
