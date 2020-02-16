import React from 'react'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

type Props = {
  selectedValue: string
  handleAmountChange: (e: React.ChangeEvent<any>) => void
}

const PlayerAmountPicker = ({ selectedValue, handleAmountChange }: Props) => {
  return (
    <Card>
      <CardContent>
        <FormControl component={'fieldset' as 'div'}>
          <FormLabel>Amount of Players</FormLabel>
          <RadioGroup
            aria-label="Amount of Players"
            name="playerAmount"
            value={selectedValue}
            onChange={handleAmountChange}
            row={true}
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  )
}

export default React.memo(PlayerAmountPicker)
