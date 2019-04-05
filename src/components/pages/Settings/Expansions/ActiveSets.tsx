import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import config from '../../../../config'
import { RootState } from '../../../../Redux/Store'
import * as Expansions from '../../../../Redux/Store/Settings/Expansions'
import * as SelectedExpansions from '../../../../Redux/Store/Settings/Expansions/Selected'

import CheckboxList from './CheckboxList'

const mapStateToProps = (state: RootState) => ({
  standalones: Expansions.selectors.getStandaloneExpansions,
  miniExpansions: Expansions.selectors.getMiniExpansions,
  promos: Expansions.selectors.getPromos,
  selectedExpansions: SelectedExpansions.selectors.getSelectedExpansionsState(
    state
  ),
  allSetsSelected: SelectedExpansions.selectors.getAllSetsSelected(state),
})

const mapDispatchToProps = {
  handleSelectAll: SelectedExpansions.actions.toggleAll,
  handleChange: SelectedExpansions.actions.toggleExpansion,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ActiveSets = React.memo(
  ({
    allSetsSelected,
    handleSelectAll,
    standalones,
    miniExpansions,
    promos,
    selectedExpansions,
    handleChange,
  }: Props) => (
    <FormControl component={'fieldset' as 'div'}>
      <FormLabel />
      <FormGroup style={{ marginBottom: '20px' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={allSetsSelected}
              onChange={handleSelectAll}
              value={allSetsSelected ? 'Deselect All' : 'Select All'}
            />
          }
          label={allSetsSelected ? 'Deselect All' : 'Select All'}
        />
      </FormGroup>
      <CheckboxList
        label="Standalone Sets"
        setConfig={selectedExpansions}
        expansions={standalones}
        changeHandler={handleChange}
      />
      <CheckboxList
        label="Mini Expansions"
        setConfig={selectedExpansions}
        expansions={miniExpansions}
        changeHandler={handleChange}
      />
      <CheckboxList
        label="Promos"
        setConfig={selectedExpansions}
        expansions={promos}
        changeHandler={handleChange}
      />
    </FormControl>
  )
)

ActiveSets.displayName = 'ActiveSets'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveSets)
