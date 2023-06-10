import React from 'react'

import Input from '../Input'
import FormLabel from './FormLabel'
import FormControl from '../FormControl'

type Props = {
  expeditionName: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const NameInput = ({ expeditionName, handleInputChange, ...rest }: Props) => {
  return (
    <FormControl component={'fieldset' as 'div'}>
      <FormLabel>General</FormLabel>

      <Input
        id="expeditionName"
        label="Expedition Name"
        placeholder="Expedition Name"
        value={expeditionName}
        onChange={handleInputChange}
        margin="normal"
        variant="outlined"
        {...rest}
      />
    </FormControl>
  )
}

export default React.memo(NameInput)
