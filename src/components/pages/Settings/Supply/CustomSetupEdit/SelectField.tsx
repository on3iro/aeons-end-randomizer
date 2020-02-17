import React from 'react'
import styled from 'styled-components'
import MuiSelect from '@material-ui/core/Select'
import MuiFormControl from '@material-ui/core/FormControl'

const Wrapper = styled(MuiFormControl)`
  width: 50%;
`

const Select = styled(MuiSelect)`
  margin: 0 8px 16px;
`

const SelectField = (props: any) => (
  <Wrapper>
    <Select {...props} />
  </Wrapper>
)

export default React.memo(SelectField)
