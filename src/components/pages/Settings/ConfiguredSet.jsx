import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const ConfiguredSet = React.memo(({
  set,
  configurationOfSets,
  handleChange
}) => (
  <FormControlLabel
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

export default ConfiguredSet
