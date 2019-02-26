import React from 'react'

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import config from '../../../config'


const renderMarketOptions = () => Object
  .values(config.MARKETSETUPS)
  .map(setup => ( 
    <FormControlLabel
      key={setup.id}
      value={setup.id}
      control={<Radio />}
      label={setup.name}
    />
  ))

const MarketOptions = React.memo(({ marketSetupId, changeHandler }: {
  marketSetupId: string,
  changeHandler: (event: React.ChangeEvent<any>) => void
}) => (
  <RadioGroup
    aria-label="Market Setup Options"
    name="marketOptions"
    value={marketSetupId}
    onChange={changeHandler}
  >
    { renderMarketOptions() }
  </RadioGroup>
))

export default MarketOptions
