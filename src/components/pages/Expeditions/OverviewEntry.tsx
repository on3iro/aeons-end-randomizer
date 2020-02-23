import React from 'react'

import { usePrompt, useModal } from 'hooks/useModal'

import { Expedition } from 'types'

import H2 from 'components/atoms/H2'

import Delete from './Delete'
import Copy from './Copy'
import ListItem from './ListItem'
import ExpeditionTile from './ExpeditionTile'
import CreationDialog from 'components/pages/Expeditions/CreationDialog'

type Props = {
  expedition: Expedition
  deleteHandler: (id: string) => void
}

const OverviewEntry = ({ expedition, deleteHandler }: Props) => {
  const deletionPrompt = usePrompt()
  const openDeletionDialog = () => {
    deletionPrompt.show()
  }
  const yesHandler = () => {
    deleteHandler(expedition.id)
  }

  const creationModal = useModal()

  const url = `/expeditions/${expedition.id}`
  const deletionDialogTitle = `Would you really like to delete Expedition: "${expedition.name ||
    expedition.id}"?`

  return (
    <React.Fragment>
      <ListItem key={expedition.id}>
        <ExpeditionTile url={url} expedition={expedition} />
        <Delete onClick={openDeletionDialog} />
        <Copy onClick={creationModal.show} />
      </ListItem>

      <creationModal.RenderModal titleColor="#333" titleLabel="New Expedition">
        <CreationDialog
          finisher={creationModal.hide}
          existingExpedition={expedition}
        />
      </creationModal.RenderModal>

      <deletionPrompt.RenderPrompt
        titleColor="#333"
        titleLabel="Delete Expedition"
        yesHandler={yesHandler}
        noHandler={deletionPrompt.hide}
      >
        <H2>{deletionDialogTitle}</H2>
      </deletionPrompt.RenderPrompt>
    </React.Fragment>
  )
}

export default React.memo(OverviewEntry)
