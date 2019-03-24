import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import config from '../../../../config'

type Props = {
  set: string
  configurationOfSets: { [key: string]: boolean }
  handleChange: (set: string) => void
}

const ConfiguredSet = React.memo(
  ({ set, configurationOfSets, handleChange }: Props) => (
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
  )
)

export default ConfiguredSet
