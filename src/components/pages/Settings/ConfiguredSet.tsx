import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import config from '../../../config'

const ConfiguredSet = React.memo(({
  set,
  configurationOfSets,
  handleChange
}: {
  set: string,
  configurationOfSets: { [key: string]: boolean },
  handleChange: (set: string) => void
}) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={configurationOfSets[set]}
        onChange={() => handleChange(set)}
        value={set}
      />
    }
    label={config.DATA[set].name}
  />
))

export default ConfiguredSet
