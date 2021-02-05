import styled from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

type Props = {
  selected: boolean
}

const SupplyName = styled('span')<Props>`
  ${setTypography('caption')}
  color: ${(props) =>
    props.selected
      ? props.theme.colors.secondary.main
      : props.theme.colors.text.secondary};

  display: block;
`

export default SupplyName
