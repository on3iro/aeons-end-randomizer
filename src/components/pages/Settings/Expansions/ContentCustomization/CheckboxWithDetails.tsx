import React, { useCallback } from 'react'
import styled from 'styled-components/macro'

import Keywords from '../../../../atoms/Keywords'
import Keyword from '../../../../atoms/Keyword'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import IconButton from '@material-ui/core/IconButton'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'

const Wrapper = styled('div')``

type Props = {
  id: string
  checked: boolean
  label: string
  changeHandler: (selection: string) => void
  showDetails: (id: string) => void
  keywords?: string[]
  type?: string
}

const CheckboxWithDetails = React.memo(
  ({ checked, label, changeHandler, showDetails, keywords, id }: Props) => {
    const handleChange = useCallback(() => changeHandler(id), [
      id,
      changeHandler,
    ])
    const handleDetails = useCallback(() => showDetails(id), [id, showDetails])
    return (
      <Wrapper>
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={handleChange} value={id} />
          }
          label={label}
        />
        <IconButton
          color="primary"
          aria-label="Show details"
          onClick={handleDetails}
        >
          <VisibilityOutlinedIcon />
        </IconButton>
        {keywords && keywords.length >= 1 ? (
          <Keywords inCheckboxList={true}>
            {keywords.map(keyword => (
              <Keyword key={keyword}>{keyword}</Keyword>
            ))}
          </Keywords>
        ) : null}
      </Wrapper>
    )
  }
)

export default CheckboxWithDetails
