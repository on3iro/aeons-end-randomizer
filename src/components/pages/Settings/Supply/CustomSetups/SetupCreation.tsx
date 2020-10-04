import React, { useState, useCallback } from 'react'
import shortid from 'shortid'
import Button from '@material-ui/core/Button'

import * as types from 'aer-types/types'

import { useModal } from 'hooks/useModal'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'

import CustomSetupEdit from '../CustomSetupEdit'

const createSetup = (): types.IMarketSetup => {
  return {
    id: shortid.generate(),
    name: '',
    type: 'custom',
    active: false,
    tiles: [],
    isDirty: true,
    isNew: true,
  }
}

const SetupCreation = () => {
  const [newSetup, setNewSetup] = useState<types.IMarketSetup | null>(null)
  const {
    show: showEditModal,
    hide: hideEditModal,
    RenderModal: RenderEditModal,
  } = useModal()

  const handleCreation = useCallback(() => {
    setNewSetup(createSetup())
    showEditModal()
  }, [setNewSetup, showEditModal])

  const handleEditCancel = useCallback(() => {
    hideEditModal()
  }, [hideEditModal])

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: '16px' }}
        onClick={handleCreation}
        data-test="btn-add-custom-supply-setup"
      >
        Add
      </Button>
      <RenderEditModal
        titleColor="#333"
        titleLabel="New Setup"
        closeCallback={handleEditCancel}
      >
        <ModalBodyWrapper>
          {newSetup ? (
            <CustomSetupEdit setup={newSetup} saveCallback={hideEditModal} />
          ) : (
            'Error'
          )}
        </ModalBodyWrapper>
      </RenderEditModal>
    </React.Fragment>
  )
}

export default React.memo(SetupCreation)
