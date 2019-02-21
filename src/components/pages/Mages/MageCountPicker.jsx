import React from 'react'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const MageCountPicker = ({ selectedValue, handleAmountChange }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Amount of Mages</FormLabel>
    <RadioGroup
      aria-label="Amount of Mages"
      name="mageAmount"
      value={selectedValue}
      onChange={handleAmountChange}
    >
      <FormControlLabel value="1" control={<Radio />} label="1" />
      <FormControlLabel value="2" control={<Radio />} label="2" />
      <FormControlLabel value="3" control={<Radio />} label="3" />
      <FormControlLabel value="4" control={<Radio />} label="4" />
    </RadioGroup>
  </FormControl>
)

export default MageCountPicker
