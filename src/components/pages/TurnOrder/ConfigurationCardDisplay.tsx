import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import { TurnOrderCardType } from 'aer-types/types'

type Props = {
  type: TurnOrderCardType
}

const ConfigurationCardDisplay = styled(Typography)<Props>`
  display: block;
  padding: 5px 10px;
  margin-bottom: 2px;

  color: #fff;
  background: ${(props) =>
    props.theme.colors.turnOrderCards[props.type].normal};
`

export default ConfigurationCardDisplay
