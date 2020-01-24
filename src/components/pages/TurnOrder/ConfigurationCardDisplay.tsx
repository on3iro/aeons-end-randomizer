import styled from 'styled-components'

import { TurnOrderCardType } from 'types'

type Props = {
  type: TurnOrderCardType
}

const ConfigurationCardDisplay = styled('p')<Props>`
  display: block;
  padding: 5px 10px;
  margin: 0 0 2px;

  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.turnOrderCards[props.type].normal};

  &:last-child {
    margin-bottom: 0;
  }
`

export default ConfigurationCardDisplay
