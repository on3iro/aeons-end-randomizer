import React from 'react'

import Input from '../Input'

type Props = {
  seed: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SeedInput = ({ seed, handleInputChange }: Props) => {
  return (
    <Input
      id="expeditionSeed"
      label="Seed"
      placeholder="Custom Seed"
      value={seed}
      onChange={handleInputChange}
      margin="normal"
      variant="outlined"
    />
  )
}

export default React.memo(SeedInput)
