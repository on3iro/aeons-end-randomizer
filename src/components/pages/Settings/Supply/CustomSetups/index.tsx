import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import * as types from 'aer-types/types'

import ListWrapper from 'components/molecules/ListWrapper'

import CustomSetupCheckbox from './Checkbox'
import SetupCreation from './SetupCreation'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = ({
  customSetups,
  handleSelection,
  editSetup,
  deleteSetup,
  cancelEdit,
}: {
  customSetups: types.IMarketSetup[]
  handleSelection: ChangeHandler
  editSetup: ChangeHandler
  deleteSetup: ChangeHandler
  cancelEdit: ChangeHandler
}) =>
  customSetups.map((setup) => (
    <CustomSetupCheckbox
      key={setup.id}
      setup={setup}
      changeHandler={handleSelection}
      editSetup={editSetup}
      deleteSetup={deleteSetup}
      cancelEdit={cancelEdit}
    />
  ))

const mapStateToProps = (state: RootState) => ({
  customSetups: selectors.Settings.SupplySetups.getCustomList(state),
})

const mapDispatchToProps = {
  toggleSetup: actions.Settings.SupplySetups.toggleSetup,
  editSetup: actions.Settings.SupplySetups.editCustomSetup,
  deleteSetup: actions.Settings.SupplySetups.deleteCustomSetup,
  cancelEdit: actions.Settings.SupplySetups.cancelEdit,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const CustomSetups = ({
  customSetups,
  toggleSetup,
  editSetup,
  deleteSetup,
  cancelEdit,
}: Props) => {
  const handleSelection = useCallback((item) => toggleSetup(item, 'Custom'), [
    toggleSetup,
  ])

  return (
    <ListWrapper label="Custom Setups">
      <React.Fragment>
        <React.Fragment>
          <SetupCreation />
          {renderCheckboxes({
            customSetups,
            handleSelection,
            editSetup,
            deleteSetup,
            cancelEdit,
          })}
        </React.Fragment>
      </React.Fragment>
    </ListWrapper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(CustomSetups))
