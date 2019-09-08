import React from 'react'
import styled from 'styled-components/macro'

import { navigate } from 'hookrouter'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

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
      <IconButton
        color="primary"
        aria-label="Edit"
        onClick={() => navigate(`/settings/expansions/${id}`)}
      >
        <EditIcon />
      </IconButton>
    </Wrapper>
  )
)

export default CheckboxWithControls
