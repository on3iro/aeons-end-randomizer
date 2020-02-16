import React from 'react'

import Input from '../Input'

type Props = {
  expeditionName: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const NameInput = ({ expeditionName, handleInputChange }: Props) => {
  return (
    <Input
      id="expeditionName"
      label="Expedition Name"
      placeholder="Expedition Name"
      value={expeditionName}
      onChange={handleInputChange}
      margin="normal"
      variant="outlined"
    />
  )
}

export default React.memo(NameInput)
