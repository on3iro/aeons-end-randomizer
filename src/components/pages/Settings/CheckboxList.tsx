import React from 'react'

import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import ConfiguredSet from './ConfiguredSet'


const renderConfiguredSets = (
  configurationOfSets: { [key: string]: boolean },
  sets: string[],
  handleChange: (set: string) => void
) => sets.map(set => (
  <ConfiguredSet
    key={set}
    set={set}
    configurationOfSets={configurationOfSets}
    handleChange={handleChange}
  />
))

const CheckboxList = React.memo(({
    label,
    setConfig,
    expansions,
    changeHandler,
    ...rest
}: {
    label: string,
    setConfig: { [key: string]: boolean },
    expansions: string[],
    changeHandler: (set: string) => void
}) => (
    <React.Fragment>
        <FormLabel {...rest}>{label}</FormLabel>
        <FormGroup {...rest} style={{ marginBottom: '20px' }}>
        {
            renderConfiguredSets(setConfig, expansions, changeHandler)
        }
        </FormGroup>
    </React.Fragment>
))

export default CheckboxList