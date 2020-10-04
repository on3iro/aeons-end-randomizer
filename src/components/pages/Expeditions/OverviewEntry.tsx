import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { Expedition } from 'aer-types/types'

import { actions } from 'Redux/Store'
import { usePrompt, useModal } from 'hooks/useModal'

import H2 from 'components/atoms/H2'

import Delete from './Delete'
import Copy from './Copy'
import Share from './Share'
import ListItem from './ListItem'
import Controls from './Controls'
import ExpeditionTile from './ExpeditionTile'
import CreationDialog from 'components/pages/Expeditions/CreationDialog'
import { convertExpeditionToConfig } from 'Redux/Store/Expeditions/Expeditions/helpers'

type OwnProps = {
  expedition: Expedition
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {
  deleteHandler: actions.Expeditions.Expeditions.deleteExpedition,
  shareHandler: actions.Expeditions.Expeditions.shareExpedition,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const OverviewEntry = ({ expedition, deleteHandler, shareHandler }: Props) => {
  const deletionPrompt = usePrompt()
  const openDeletionDialog = () => {
    deletionPrompt.show()
  }
  const yesHandler = () => {
    deleteHandler(expedition.id)
  }

  const handleShare = useCallback(() => {
    shareHandler(expedition)
  }, [shareHandler, expedition])

  const creationModal = useModal()

  const url = `/expeditions/${expedition.id}`
  const deletionDialogTitle = `Would you really like to delete Expedition: "${
    expedition.name || expedition.id
  }"?`

  return (
    <React.Fragment>
      <ListItem key={expedition.id} data-test={expedition.name}>
        <ExpeditionTile url={url} expedition={expedition} />
        <Controls>
          <Share onClick={handleShare} data-test="btn-share" />
          <Copy onClick={creationModal.show} data-test="btn-copy" />
          <Delete onClick={openDeletionDialog} data-test="btn-delete" />
        </Controls>
      </ListItem>

      <creationModal.RenderModal titleColor="#333" titleLabel="New Expedition">
        <CreationDialog
          finisher={creationModal.hide}
          existingExpeditionConfig={convertExpeditionToConfig(expedition)}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(OverviewEntry))
