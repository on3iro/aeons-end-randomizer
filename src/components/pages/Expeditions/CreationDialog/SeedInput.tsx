import React from 'react'

import FormControl from '../FormControl'
import FormLabel from './FormLabel'
import Input from '../Input'
import Tooltip from 'components/molecules/Tooltip'

type Props = {
  seed: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SeedInput = ({ seed, handleInputChange }: Props) => {
  return (
    <FormControl component={'fieldset' as 'div'}>
      <FormLabel>Seed Settings</FormLabel>

      <Tooltip>
        The seed makes each expeditions rolls completely deterministic. By
        importing/copying an existing expedition and re-using its seed each roll
        will be exactly the same as in the original provided that all parameters
        are unchanged and you perform exactly the same actions. That way you can
        try to beat your highscore or let other players enjoy a particular
        expedition by sharing your configuration.
      </Tooltip>

      <Input
        id="expeditionSeed"
        label="Seed"
        placeholder="Custom Seed"
        value={seed}
        onChange={handleInputChange}
        margin="normal"
        variant="outlined"
        data-test="input-seed"
      />
    </FormControl>
  )
}

export default React.memo(SeedInput)
