import React, { useContext } from 'react'

import { set as setToDb } from 'idb-keyval'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import { SetContext } from '../App.jsx'

const Settings = () => {
  const { configurationOfSets, sets, setSets } = useContext(SetContext)
  const handleChange= (set) => {
    const newSets = { ...configurationOfSets, [set]: !configurationOfSets[set] }
    setSets(newSets)
    setToDb('sets', newSets)
  }

  const allSetsSelected = Object.values(configurationOfSets).every(val => val === true)
  const handleSelectAll = () => {
    const newSets = sets.reduce((acc, set) => {
      return { ...acc, [set]: !allSetsSelected }
    }, {})
    setSets(newSets)
    setToDb('sets', newSets)
  }

  return (
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
          sets.map(set => (
            <FormControlLabel
              key={set}
              control={
                <Checkbox
                  checked={configurationOfSets[set]}
                  onChange={() => handleChange(set)}
                  value={set}
                />
              }
              label={set}
            />
          ))
        }
      </FormGroup>
    </FormControl>
  )
}

export default Settings
