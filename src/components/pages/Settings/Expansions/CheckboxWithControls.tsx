import React from 'react'
import styled from 'styled-components/macro'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import A from '../../../A'

const Wrapper = styled('div')``

type Props = {
  id: string
  checked: boolean
  item: string
  label: string
  changeHandler: (selection: string) => void
}

const CheckboxWithControls = React.memo(
  ({ checked, item, label, changeHandler, id }: Props) => (
    <Wrapper>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={() => changeHandler(item)}
            value={item}
          />
        }
        label={label}
      />
      <A href={`/settings/expansions/${id}`}>Configure</A>
    </Wrapper>
  )
)

export default CheckboxWithControls
