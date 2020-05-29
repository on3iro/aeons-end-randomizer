import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import { RootState, selectors, actions } from 'Redux/Store'

import Standalones from './Standalones'
import Mini from './Mini'
import Promos from './Promos'

const mapStateToProps = (state: RootState) => ({
  allSetsSelected: selectors.Settings.Expansions.Expansions.getAllExpansionsSelected(
    state
  ),
})

const mapDispatchToProps = {
  handleSelectAll: actions.Settings.Expansions.Expansions.main.toggleAll,
  handleChange: actions.Settings.Expansions.Expansions.selected.toggleExpansion,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ActiveSets = ({
  allSetsSelected,
  handleSelectAll,
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
    <Standalones handleChange={handleChange} />
    <Mini handleChange={handleChange} />
    <Promos handleChange={handleChange} />
  </FormControl>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ActiveSets))
