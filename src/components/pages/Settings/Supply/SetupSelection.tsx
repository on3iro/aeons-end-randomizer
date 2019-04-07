import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import { RootState } from '../../../../Redux/Store'
import * as SupplySetups from '../../../../Redux/Store/Settings/SupplySetups'

import CheckboxList from '../../../CheckboxList'
import CheckboxWithPreview from './CheckboxWithPreview'

const mapStateToProps = (state: RootState) => ({
  allSetsSelected: SupplySetups.selectors.getAllSetsSelected(state),
  predefinedSetups: SupplySetups.selectors.getPredefinedAsArray(state),
  customSetups: SupplySetups.selectors.getCustomAsArray(state),
})

const mapDispatchToProps = {
  toggleAll: SupplySetups.actions.toggleAll,
  toggleSetup: SupplySetups.actions.toggleSetup,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const SetupSelection = React.memo(
  ({
    allSetsSelected,
    customSetups,
    predefinedSetups,
    toggleAll,
    toggleSetup,
  }: Props) => {
    const items = predefinedSetups.map(setup => ({
      name: setup.id,
      label: setup.name,
      checked: setup.active,
      setup: setup,
    }))

    return (
      <FormControl component={'fieldset' as 'div'}>
        <FormLabel />
        <FormGroup style={{ marginBottom: '20px' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={allSetsSelected}
                onChange={toggleAll}
                value={allSetsSelected ? 'Deselect All' : 'Select All'}
              />
            }
            label={allSetsSelected ? 'Deselect All' : 'Select All'}
          />
        </FormGroup>
        <CheckboxList
          label="Predefined Setups"
          changeHandler={item => toggleSetup(item, 'Predefined')}
          items={items}
          Component={({ checked, item, label, changeHandler, ...rest }) => {
            const setup = predefinedSetups.find(setup => setup.id === item)

            return (
              <CheckboxWithPreview
                changeHandler={changeHandler}
                checked={checked}
                item={item}
                label={label}
                setup={setup}
              />
            )
          }}
        />
      </FormControl>
    )
  }
)

SetupSelection.displayName = 'SetupSelection'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupSelection)
