import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '../FormControl'
import FormLabel from './FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'

type Props = {
  bigPocketVariant: boolean
  changeBigPocketVariant: (value: boolean) => any
}

const BigPocketSelect = ({
  bigPocketVariant,
  changeBigPocketVariant,
}: Props) => {
  return (
    <FormControl component={'fieldset' as 'div'}>
      <FormLabel>Loot distribution</FormLabel>
      <FormControlLabel
        control={
          <Checkbox
            id="bigPocket"
            checked={bigPocketVariant}
            onChange={() => changeBigPocketVariant(!bigPocketVariant)}
          />
        }
        label="Big Pocket Variant"
      />
    </FormControl>
  )
}

export default React.memo(BigPocketSelect)
