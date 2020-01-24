import React from 'react'

import { usePrompt } from '../../../hooks/useModal'

import { Expedition } from '../../../types'

import H2 from 'components/atoms/_styled_/H2'

import Delete from './Delete'
import ListItem from './ListItem'
import ExpeditionTile from './ExpeditionTile'

type Props = {
  expedition: Expedition
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

  const deletionDialogTitle = `Would you really like to delete Expedition: "${expedition.name ||
    expedition.id}"?`

  return (
    <React.Fragment>
      <ListItem key={expedition.id}>
        <ExpeditionTile url={url} expedition={expedition} />
        <Delete onClick={openDeletionDialog} />
      </ListItem>
      <RenderPrompt
        titleColor="#333"
        titleLabel="Delete Expedition"
        yesHandler={yesHandler}
        noHandler={hide}
      >
        <H2>{deletionDialogTitle}</H2>
      </RenderPrompt>
    </React.Fragment>
  )
})

export default OverviewEntry
