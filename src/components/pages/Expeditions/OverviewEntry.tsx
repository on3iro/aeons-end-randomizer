import React from 'react'

import { usePrompt } from '../../../hooks/useModal'

import DeleteButton from '../../molecules/DeleteButton'

import A from '../../atoms/A'

type Props = {
  expedition: { id: string; name: string }
  deleteHandler: (id: string) => void
}

const OverviewEntry = React.memo(({ expedition, deleteHandler }: Props) => {
  const { show, hide, RenderPrompt } = usePrompt()
  const url = `/expeditions/${expedition.id}`
  const openDeletionDialog = () => {
    show()
  }
  const yesHandler = () => {
    deleteHandler(expedition.id)
  }

  const deletionDialogTitle = `Would you really like to delete Expedition: "${expedition.name}"?`

  return (
    <React.Fragment>
      <li key={expedition.id}>
        <A to={url}>
          {expedition.name} {expedition.id}
        </A>
        <DeleteButton onClick={openDeletionDialog} />
      </li>
      <RenderPrompt
        titleColor="#333"
        titleLabel={deletionDialogTitle}
        yesHandler={yesHandler}
        noHandler={hide}
      />
    </React.Fragment>
  )
})

export default OverviewEntry
