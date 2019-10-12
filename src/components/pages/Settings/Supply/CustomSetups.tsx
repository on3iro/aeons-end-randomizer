import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'

import CheckboxList from '../../../CheckboxList'
import CheckboxWithPreview from './CheckboxWithPreview'
import CustomSetupEdit from './CustomSetupEdit'

import { RootState, actions, selectors } from '../../../../Redux/Store'
import { useModal } from '../../../Modal'
import CheckboxWithPreviewControls from './CheckboxWithPreviewControls'

const mapStateToProps = (state: RootState) => ({
  customSetups: selectors.Settings.SupplySetups.getCustomAsArray(state),
})

const mapDispatchToProps = {
  toggleSetup: actions.Settings.SupplySetups.toggleSetup,
  createSetup: actions.Settings.SupplySetups.createCustomSetup,
  editSetup: actions.Settings.SupplySetups.editCustomSetup,
  deleteSetup: actions.Settings.SupplySetups.deleteCustomSetup,
  cancelEdit: actions.Settings.SupplySetups.cancelEdit,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

// TODO refactor this and all subcomponents!
const CustomSetups = React.memo(
  ({
    customSetups,
    createSetup,
    toggleSetup,
    editSetup,
    deleteSetup,
    cancelEdit,
  }: Props) => {
    const customItems = customSetups.map(setup => ({
      id: setup.id,
      name: setup.id,
      label: setup.name,
      checked: setup.active,
      setup: setup,
    }))

    const handleToggle = useCallback(item => toggleSetup(item, 'Custom'), [
      toggleSetup,
    ])

    const CheckboxComponent = useCallback(
      ({ checked, item, label, changeHandler, ...rest }) => {
        const setup = customSetups.find(setup => setup.id === item.id)
        const { show, renderModal } = useModal()

        if (!setup) return null

        if (setup.isDirty) {
          useEffect(show)
        }

        const modalTitle = setup.isNew ? 'New Setup' : 'Edit Setup'

        const handleEdit = useCallback(() => {
          show()
          editSetup(setup.id)
        }, [setup.id, show])
        const handleDelete = useCallback(() => deleteSetup(setup.id), [
          setup.id,
        ])
        const handleCancel = useCallback(() => cancelEdit(setup.id), [setup.id])

        return (
          <CheckboxWithPreview
            changeHandler={changeHandler}
            checked={checked}
            item={item.id}
            label={label}
            setup={setup}
          >
            <CheckboxWithPreviewControls>
              <IconButton
                color="primary"
                aria-label="Edit"
                onClick={handleEdit}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="secondary"
                aria-label="Delete"
                onClick={handleDelete}
              >
                <DeleteIcon />
              </IconButton>
            </CheckboxWithPreviewControls>
            {renderModal(
              '#333',
              modalTitle,
              <CustomSetupEdit setup={setup} />,
              handleCancel
            )}
          </CheckboxWithPreview>
        )
      },
      [customSetups, editSetup, deleteSetup, cancelEdit]
    )

    return (
      <CheckboxList
        label="Custom Setups"
        changeHandler={handleToggle}
        items={customItems}
        Component={CheckboxComponent}
      >
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: '16px' }}
          onClick={createSetup}
        >
          Add
        </Button>
      </CheckboxList>
    )
  }
)

CustomSetups.displayName = 'CustomSetups'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomSetups)
