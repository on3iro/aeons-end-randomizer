import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import config from '../../../config'

import CheckboxList from './CheckboxList'


const ActiveSets = React.memo(({
  allSetsSelected,
  handleSelectAll,
  setsAndPromos,
  configurationOfSets,
  handleChange
}: {
  allSetsSelected: boolean,
  handleSelectAll: () => void,
  setsAndPromos: string[],
  configurationOfSets: { [key: string]: boolean },
  handleChange: (set: string) => void
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
    <FormControl component={"fieldset" as "div"}>
      <FormLabel/>
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
      <CheckboxList
        label="Standalone Sets"
        setConfig={configurationOfSets}
        expansions={standalones}
        changeHandler={handleChange}
      />
      <CheckboxList
        label="Mini Expansions"
        setConfig={configurationOfSets}
        expansions={miniExpansions}
        changeHandler={handleChange}
      />
      <CheckboxList
        label="Promos"
        setConfig={configurationOfSets}
        expansions={promos}
        changeHandler={handleChange}
      />
    </FormControl>
  )
})

export default ActiveSets
