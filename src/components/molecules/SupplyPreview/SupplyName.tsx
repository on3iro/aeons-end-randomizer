import styled from 'styled-components/macro'

import Caption from 'components/atoms/_styled_/Caption'

type Props = {
  selected: boolean
}

const SupplyName = styled(Caption)<Props>`
  color: ${props =>
    props.selected
      ? props.theme.colors.secondary.main
      : props.theme.colors.text.secondary};
`

export default SupplyName
