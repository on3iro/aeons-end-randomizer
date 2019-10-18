import React, { useCallback } from 'react'

import * as types from '../../../../types'
import { useModal, usePrompt } from '../../../../hooks/useModal'

import EditButton from '../../../molecules/EditButton'
import DeleteButton from '../../../molecules/DeleteButton'

import CheckboxWithPreview from './CheckboxWithPreview'
import CustomSetupEdit from './CustomSetupEdit'
import CheckboxWithPreviewControls from './CheckboxWithPreviewControls'

type Props = {
  setup: types.IMarketSetup
  changeHandler: (id: string) => void
  editSetup: (id: string) => void
  deleteSetup: (id: string) => void
  cancelEdit: (id: string) => void
}

const CustomSetupCheckbox = React.memo(
  ({ setup, changeHandler, editSetup, deleteSetup, cancelEdit }: Props) => {
    const {
      show: showEditModal,
      hide: hideEditModal,
      RenderModal: RenderEditModal,
    } = useModal()
    const {
      show: showDeletionDialog,
      hide: hideDeletionDialog,
      RenderPrompt: RenderDeletionPrompt,
    } = usePrompt()
    const modalTitle = 'Edit Setup'

    const handleEdit = useCallback(() => {
      showEditModal()
      editSetup(setup.id)
    }, [setup.id, showEditModal, editSetup])

    const handleEditCancel = useCallback(() => cancelEdit(setup.id), [
      cancelEdit,
      setup.id,
    ])

    const openDeletionDialog = useCallback(() => {
      showDeletionDialog()
    }, [showDeletionDialog])

    const handleDelete = useCallback(() => {
      deleteSetup(setup.id)
      hideDeletionDialog()
    }, [setup.id, deleteSetup, hideDeletionDialog])

    return (
      <CheckboxWithPreview setup={setup} changeHandler={changeHandler}>
        <CheckboxWithPreviewControls>
          <EditButton onClick={handleEdit} />
          <DeleteButton onClick={openDeletionDialog} />
        </CheckboxWithPreviewControls>
        <RenderEditModal
          titleColor="#333"
          titleLabel={modalTitle}
          closeCallback={handleEditCancel}
        >
          <CustomSetupEdit setup={setup} saveCallback={hideEditModal} />
        </RenderEditModal>
        <RenderDeletionPrompt
          yesHandler={handleDelete}
          noHandler={hideDeletionDialog}
          titleColor="#333"
          titleLabel={`Would you really like to delete setup: "${setup.name}"`}
        />
      </CheckboxWithPreview>
    )
  }
)

CustomSetupCheckbox.displayName = 'CustomSetupCheckbox'

export default CustomSetupCheckbox
