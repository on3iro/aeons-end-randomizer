import styled from 'styled-components'

import { Wrapper } from 'components/atoms/SelectField'
import IconButton from 'components/atoms/IconButton'

const SelectWithTooltipWrapper = styled('div')`
  display: flex;
  margin-bottom: 32px;
  align-items: center;

  ${Wrapper} {
    width: 100%;
  }

  ${IconButton} {
    margin-left: 16px;
  }
`

export default SelectWithTooltipWrapper
