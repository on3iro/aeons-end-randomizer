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
  label: string
  optionsCount: number
}

const renderOptions = (optionsCount: number) =>
  Array.from(Array(optionsCount).keys()).map(i => {
    const optionLabel = (i + 1).toString() // our array starts a 0 -> therefore '+1'
    return (
      <FormControlLabel
        value={optionLabel}
        control={<Radio />}
        label={optionLabel}
      />
    )
  })

const AmountPicker = ({
  selectedValue,
  handleAmountChange,
  label,
  optionsCount,
}: Props) => (
  <Card>
    <CardContent>
      <FormControl component={'fieldset' as 'div'}>
        <FormLabel>{label}</FormLabel>
        <RadioGroup
          aria-label={label}
          name={label.replace(/\s/g, '').toLowerCase()}
          value={selectedValue}
          onChange={handleAmountChange}
          row={true}
        >
          {renderOptions(optionsCount)}
        </RadioGroup>
      </FormControl>
    </CardContent>
  </Card>
)

export default React.memo(AmountPicker)
