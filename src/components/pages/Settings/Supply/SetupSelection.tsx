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
import SupplyPreview from '../../../SupplyPreview'

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
  }: Props) => (
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
        items={predefinedSetups.map(setup => ({
          name: setup.id,
          label: setup.name,
          checked: setup.active,
          setup: setup,
        }))}
        Component={({ checked, item, label, changeHandler, ...rest }) => {
          const setup = predefinedSetups.find(setup => setup.id === item)
          // TODO Refactor!!!

          return (
            <div>
              {/* TODO extract Checkbox-Component */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => changeHandler(item)}
                    value={item}
                  />
                }
                label={label}
              />
              {setup ? (
                <SupplyPreview
                  clickHandler={() => 'Not implemented!'}
                  setup={setup}
                />
              ) : null}
            </div>
          )
        }}
      />
    </FormControl>
  )
)

SetupSelection.displayName = 'SetupSelection'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupSelection)
