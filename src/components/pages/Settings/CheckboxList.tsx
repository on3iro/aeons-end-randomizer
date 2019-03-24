import React from 'react'

import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import ConfiguredSet from './ConfiguredSet'

const renderConfiguredSets = (
  configurationOfSets: { [key: string]: boolean },
  sets: ReadonlyArray<string>,
  handleChange: (set: string) => void
) =>
  sets.map(set => (
    <ConfiguredSet
      key={set}
      set={set}
      configurationOfSets={configurationOfSets}
      handleChange={handleChange}
    />
  ))

type Props = {
  label: string
  setConfig: { [key: string]: boolean }
  expansions: ReadonlyArray<string>
  changeHandler: (set: string) => void
}

const CheckboxList = React.memo(
  ({ label, setConfig, expansions, changeHandler, ...rest }: Props) => (
    <React.Fragment>
      <FormLabel {...rest}>{label}</FormLabel>
      <FormGroup {...rest} style={{ marginBottom: '20px' }}>
        {renderConfiguredSets(setConfig, expansions, changeHandler)}
      </FormGroup>
    </React.Fragment>
  )
)

export default CheckboxList
