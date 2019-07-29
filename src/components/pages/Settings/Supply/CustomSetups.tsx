import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import CheckboxList from '../../../CheckboxList'
import CheckboxWithPreview from './CheckboxWithPreview'
import CustomSetupEdit from './CustomSetupEdit'

import { RootState, actions, selectors } from '../../../../Redux/Store'

const mapStateToProps = (state: RootState) => ({
  customSetups: selectors.Settings.SupplySetups.getCustomAsArray(state),
})

const mapDispatchToProps = {
  toggleSetup: actions.Settings.SupplySetups.toggleSetup,
  createSetup: actions.Settings.SupplySetups.createCustomSetup,
  editSetup: actions.Settings.SupplySetups.editCustomSetup,
  deleteSetup: actions.Settings.SupplySetups.deleteCustomSetup,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const CustomSetups = React.memo(
  ({
    customSetups,
    createSetup,
    toggleSetup,
    editSetup,
    deleteSetup,
  }: Props) => {
    const customItems = customSetups.map(setup => ({
      name: setup.id,
      label: setup.name,
      checked: setup.active,
      setup: setup,
    }))

    return (
      <CheckboxList
        label="Custom Setups"
        changeHandler={item => toggleSetup(item, 'Custom')}
        items={customItems}
        Component={({ checked, item, label, changeHandler, ...rest }) => {
          const setup = customSetups.find(setup => setup.id === item)

          if (!setup) return null

          if (setup.isDirty) {
            return <CustomSetupEdit setup={setup} />
          }

          return (
            <CheckboxWithPreview
              changeHandler={changeHandler}
              checked={checked}
              item={item}
              label={label}
              setup={setup}
            >
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={() => editSetup(setup.id)}
              >
                Edit
              </Button>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => deleteSetup(setup.id)}
              >
                Delete
              </Button>
            </CheckboxWithPreview>
          )
        }}
      >
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={() => createSetup()}
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
