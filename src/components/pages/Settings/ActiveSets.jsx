import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import config from 'config'

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
  setsAndPromos,
  configurationOfSets,
  handleChange
}) => {
  const standalones = setsAndPromos
    .filter((set) => config.DATA[set].type === "standalone")
    .sort()
  const promos = setsAndPromos
    .filter((set) => config.DATA[set].type === "promo")
    .sort((a, b) => {
      const promoA = config.DATA[a].name
      const promoB = config.DATA[b].name

      if (promoA < promoB) {
        return -1;
      }

      if (promoA > promoB) {
        return 1;
      }

      return 0;
    })
  const miniExpansions = setsAndPromos
    .filter((set) => config.DATA[set].type === "mini")
    .sort()

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"/>
      <FormGroup style={{ marginBottom: '20px' }}>
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
      </FormGroup>
      <FormLabel component="legend">Standalone Sets</FormLabel>
      <FormGroup style={{ marginBottom: '20px' }}>
        {
          renderConfiguredSets(configurationOfSets, standalones, handleChange)
        }
      </FormGroup>
      <FormLabel component="legend">Mini Expansions</FormLabel>
      <FormGroup style={{ marginBottom: '20px' }}>
        {
          renderConfiguredSets(configurationOfSets, miniExpansions, handleChange)
        }
      </FormGroup>
      <FormLabel component="legend">Promos</FormLabel>
      <FormGroup>
        {
          renderConfiguredSets(configurationOfSets, promos, handleChange)
        }
      </FormGroup>
    </FormControl>
  )
})

export default ActiveSets
