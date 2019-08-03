import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import { RootState, actions, selectors } from '../../../../Redux/Store'

import CustomSetups from './CustomSetups'
import PredefinedSetups from './PredefinedSetups'
import SetupSelectionWrapper from './SetupSelectionWrapper'

const mapStateToProps = (state: RootState) => ({
  allSetsSelected: selectors.Settings.SupplySetups.getAllSetsSelected(state),
})

const mapDispatchToProps = {
  toggleAll: actions.Settings.SupplySetups.toggleAll,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const SetupSelection = React.memo(({ allSetsSelected, toggleAll }: Props) => {
  return (
    <SetupSelectionWrapper component={'fieldset' as 'div'}>
      <FormLabel />
      <FormGroup>
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
      <CustomSetups />
      <PredefinedSetups />
    </SetupSelectionWrapper>
  )
})

SetupSelection.displayName = 'SetupSelection'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupSelection)
