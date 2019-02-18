import React, { useContext } from 'react'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import { SetContext } from '../App.jsx'

const Settings = () => {
  const { setConfiguration, sets, dispatch } = useContext(SetContext)
  const handleChange= (set) => dispatch({ type: "SET_TOGGLE", payload: { [set]: !setConfiguration[set]} })

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select active sets</FormLabel>
      <FormGroup>
        {
          sets.map(set => (
            <FormControlLabel
              key={set}
              control={
                <Checkbox
                  checked={setConfiguration[set]}
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
