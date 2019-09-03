import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import { RootState, selectors, actions } from '../../../../Redux/Store'
import * as types from '../../../../types'

import CheckboxList from '../../../CheckboxList'

const mapStateToProps = (state: RootState) => ({
  standalones: selectors.Settings.Expansions.SelectedExpansions.getStandaloneExpansions(
    state
  ),
  miniExpansions: selectors.Settings.Expansions.SelectedExpansions.getMiniExpansions(
    state
  ),
  promos: selectors.Settings.Expansions.SelectedExpansions.getPromos(state),
  allSetsSelected: selectors.Settings.Expansions.SelectedExpansions.getAllExpansionsSelected(
    state
  ),
})

const mapDispatchToProps = {
  handleSelectAll: actions.Settings.Expansions.SelectedExpansions.toggleAll,
  handleChange: actions.Settings.Expansions.SelectedExpansions.toggleExpansion,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ActiveSets = React.memo(
  ({
    allSetsSelected,
    handleSelectAll,
    standalones,
    miniExpansions,
    promos,
    handleChange,
  }: Props) => {
    const expansionsToItems = (
      expansions: ReadonlyArray<types.Expansion & { selected: boolean }>
    ) =>
      expansions.map(expansion => ({
        name: expansion.name,
        id: expansion.id,
        label: expansion.name,
        checked: expansion.selected,
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
