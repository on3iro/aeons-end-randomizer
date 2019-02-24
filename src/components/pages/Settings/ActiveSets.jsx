import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import ConfiguredSet from './ConfiguredSet'


const renderConfiguredSets = (configurationOfSets, sets, handleChange) => sets.map(set => (
  <ConfiguredSet
    key={set}
    set={set}
    configurationOfSets={configurationOfSets} 
    handleChange={handleChange}
  />
))

const ActiveSets = React.memo(({
  allSetsSelected,
  handleSelectAll,
  sets,
  configurationOfSets,
  handleChange
}) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Select active sets</FormLabel>
    <FormControlLabel
      control={
        <Checkbox
          checked={allSetsSelected}
          onChange={handleSelectAll}
          value={ allSetsSelected
            ? "Deselect All"
            : "Select All"
          }
        />
      }
      label={ allSetsSelected
        ? "Deselect All"
        : "Select All"
      }
    />
    <FormGroup>
      {
        renderConfiguredSets(configurationOfSets, sets, handleChange)
      }
    </FormGroup>
  </FormControl>
))

export default ActiveSets
