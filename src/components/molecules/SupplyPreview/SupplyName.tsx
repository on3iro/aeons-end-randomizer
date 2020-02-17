import styled from 'styled-components/macro'

import Typography from '@material-ui/core/Typography'

type Props = {
  selected: boolean
}

const SupplyName = styled(Typography)<Props>`
  color: ${props =>
    props.selected
      ? props.theme.colors.secondary.main
      : props.theme.colors.text.secondary};
`

export default SupplyName
