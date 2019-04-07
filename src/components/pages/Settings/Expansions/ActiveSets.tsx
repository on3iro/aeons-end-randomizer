import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import config from '../../../../config'
import { RootState, selectors, actions } from '../../../../Redux/Store'

import CheckboxList from '../../../CheckboxList'

const mapStateToProps = (state: RootState) => ({
  standalones: selectors.Settings.Expansions.getStandaloneExpansions,
  miniExpansions: selectors.Settings.Expansions.getMiniExpansions,
  promos: selectors.Settings.Expansions.getPromos,
  selectedExpansions: selectors.Settings.Expansions.Selected.getSelectedExpansionsState(
    state
  ),
  allSetsSelected: selectors.Settings.Expansions.Selected.getAllSetsSelected(
    state
  ),
})

const mapDispatchToProps = {
  handleSelectAll: actions.Settings.Expansions.Selected.toggleAll,
  handleChange: actions.Settings.Expansions.Selected.toggleExpansion,
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
  }: Props) => {
    const expansionsToItems = (expansions: ReadonlyArray<string>) =>
      expansions.map(expansion => ({
        name: expansion,
        item: expansion,
        label: config.DATA[expansion].name,
        checked: selectedExpansions[expansion],
      }))

    return (
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
          items={expansionsToItems(standalones)}
          changeHandler={handleChange}
        />
        <CheckboxList
          label="Mini Expansions"
          items={expansionsToItems(miniExpansions)}
          changeHandler={handleChange}
        />
        <CheckboxList
          label="Promos"
          items={expansionsToItems(promos)}
          changeHandler={handleChange}
        />
      </FormControl>
    )
  }
)

ActiveSets.displayName = 'ActiveSets'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveSets)
